// Gera public/og.png (1200x630), a imagem de preview do site em links
// compartilhados. Desenha o mesmo código de barras da página, com a linha do
// laser, e escreve o nome abaixo com uma fonte bitmap 5x7 embutida.
//
//   npm run og
//
// Sem dependências: o PNG é montado à mão (IHDR + IDAT deflatado + IEND).

const fs = require('fs')
const path = require('path')
const zlib = require('zlib')

const WIDTH = 1200
const HEIGHT = 630

// Mesmos tokens do tema claro em src/styles/globals.css
const PAPER = [232, 237, 241]
const INK = [22, 33, 58]
const LASER = [227, 38, 47]

const BARS_X = 100
const BARS_WIDTH = WIDTH - BARS_X * 2
const BARS_Y = 170
const BARS_HEIGHT = 230

const TEXT = 'GABRIEL MORAIS'
const TEXT_SCALE = 8
const TEXT_GAP = 10
const TEXT_Y = 450

// Fonte 5x7 só com os glifos usados por TEXT
const GLYPHS = {
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  B: ['11110', '10001', '10001', '11110', '10001', '10001', '11110'],
  E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
  G: ['01110', '10001', '10000', '10111', '10001', '10001', '01110'],
  I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
  L: ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
  M: ['10001', '11011', '10101', '10001', '10001', '10001', '10001'],
  O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
  S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
  ' ': ['00000', '00000', '00000', '00000', '00000', '00000', '00000'],
}

const GLYPH_WIDTH = 5
const GLYPH_HEIGHT = 7

function readBarcodePattern() {
  const source = fs.readFileSync(
    path.join(__dirname, '..', 'src', 'data', 'profile.ts'),
    'utf8',
  )
  const match = source.match(/nameBarcode\s*=\s*\n?\s*"([01]+)"/)
  if (!match) throw new Error('não achei nameBarcode em src/data/profile.ts')
  return match[1]
}

// --- canvas RGB simples -----------------------------------------------------

function createCanvas(background) {
  const pixels = Buffer.alloc(WIDTH * HEIGHT * 3)
  for (let i = 0; i < pixels.length; i += 3) {
    pixels[i] = background[0]
    pixels[i + 1] = background[1]
    pixels[i + 2] = background[2]
  }
  return pixels
}

// alpha 1 pinta a cor cheia; valores menores misturam com o que já está lá
function blendPixel(pixels, x, y, color, alpha) {
  if (x < 0 || y < 0 || x >= WIDTH || y >= HEIGHT) return
  const offset = (y * WIDTH + x) * 3
  for (let c = 0; c < 3; c++) {
    pixels[offset + c] = Math.round(pixels[offset + c] * (1 - alpha) + color[c] * alpha)
  }
}

function fillRect(pixels, x, y, width, height, color, alpha = 1) {
  for (let row = y; row < y + height; row++) {
    for (let col = x; col < x + width; col++) {
      blendPixel(pixels, col, row, color, alpha)
    }
  }
}

function drawText(pixels, text, x, y, color) {
  let cursor = x
  for (const char of text) {
    const glyph = GLYPHS[char]
    if (!glyph) throw new Error(`glifo ausente para "${char}"`)
    for (let row = 0; row < GLYPH_HEIGHT; row++) {
      for (let col = 0; col < GLYPH_WIDTH; col++) {
        if (glyph[row][col] !== '1') continue
        fillRect(
          pixels,
          cursor + col * TEXT_SCALE,
          y + row * TEXT_SCALE,
          TEXT_SCALE,
          TEXT_SCALE,
          color,
        )
      }
    }
    cursor += GLYPH_WIDTH * TEXT_SCALE + TEXT_GAP
  }
}

function textWidth(text) {
  return text.length * (GLYPH_WIDTH * TEXT_SCALE + TEXT_GAP) - TEXT_GAP
}

// --- PNG --------------------------------------------------------------------

const CRC_TABLE = (() => {
  const table = new Int32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    table[n] = c
  }
  return table
})()

function crc32(buffer) {
  let crc = -1
  for (const byte of buffer) crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8)
  return (crc ^ -1) >>> 0
}

function chunk(type, data) {
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([length, body, crc])
}

function encodePng(pixels) {
  const header = Buffer.alloc(13)
  header.writeUInt32BE(WIDTH, 0)
  header.writeUInt32BE(HEIGHT, 4)
  header[8] = 8 // 8 bits por canal
  header[9] = 2 // truecolor RGB
  header[10] = 0 // deflate
  header[11] = 0 // filtro adaptativo
  header[12] = 0 // sem entrelaçamento

  // Cada scanline é precedida pelo byte de filtro (0 = sem filtro)
  const stride = WIDTH * 3
  const raw = Buffer.alloc(HEIGHT * (stride + 1))
  for (let y = 0; y < HEIGHT; y++) {
    raw[y * (stride + 1)] = 0
    pixels.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride)
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', header),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

// --- composição -------------------------------------------------------------

function main() {
  const pattern = readBarcodePattern()
  const pixels = createCanvas(PAPER)
  const moduleWidth = BARS_WIDTH / pattern.length

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] !== '1') continue
    const start = i
    while (pattern[i + 1] === '1') i++
    const x = Math.round(BARS_X + start * moduleWidth)
    const end = Math.round(BARS_X + (i + 1) * moduleWidth)
    fillRect(pixels, x, BARS_Y, end - x, BARS_HEIGHT, INK)
  }

  // Linha do laser, com halo de intensidade decrescente para os lados
  const laserX = Math.round(BARS_X + BARS_WIDTH * 0.62)
  const laserTop = BARS_Y - 20
  const laserHeight = BARS_HEIGHT + 40
  for (let spread = 14; spread >= 1; spread--) {
    const alpha = 0.3 * (1 - spread / 15)
    fillRect(pixels, laserX - spread, laserTop, 1, laserHeight, LASER, alpha)
    fillRect(pixels, laserX + spread, laserTop, 1, laserHeight, LASER, alpha)
  }
  fillRect(pixels, laserX - 2, laserTop, 5, laserHeight, LASER)

  drawText(pixels, TEXT, Math.round((WIDTH - textWidth(TEXT)) / 2), TEXT_Y, INK)

  const output = path.join(__dirname, '..', 'public', 'og.png')
  fs.writeFileSync(output, encodePng(pixels))
  console.log(`og.png gerado: ${WIDTH}x${HEIGHT}`)
}

main()
