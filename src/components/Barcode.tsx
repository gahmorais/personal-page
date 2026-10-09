import { PointerEvent, useState } from "react";

interface IPropsBarcode {
  pattern: string;
  /** Legenda abaixo das barras; o mesmo texto que o padrão codifica */
  text: string;
  /** Descrição da imagem, já no idioma da página */
  alt: string;
}

// Agrupa os módulos "1" consecutivos em barras com posição e largura
function toBars(pattern: string) {
  const bars: { x: number; width: number }[] = [];
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] !== "1") continue;
    const start = i;
    while (pattern[i + 1] === "1") i++;
    bars.push({ x: start, width: i - start + 1 });
  }
  return bars;
}

export default function Barcode({ pattern, text, alt }: IPropsBarcode) {
  const [laserX, setLaserX] = useState<number | null>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setLaserX(((event.clientX - rect.left) / rect.width) * 100);
  }

  return (
    <figure className="w-full max-w-xl">
      <div
        className="relative"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setLaserX(null)}
      >
        <svg
          viewBox={`0 0 ${pattern.length} 40`}
          preserveAspectRatio="none"
          className="block h-20 w-full text-ink sm:h-28"
          role="img"
          aria-label={alt}
        >
          {toBars(pattern).map((bar) => (
            <rect key={bar.x} x={bar.x} width={bar.width} height="40" fill="currentColor" />
          ))}
        </svg>
        {laserX === null ? (
          <span className="laser laser-sweep" aria-hidden="true" />
        ) : (
          <span className="laser" style={{ left: `${laserX}%` }} aria-hidden="true" />
        )}
      </div>
      <figcaption
        className="mt-2 text-center font-mono text-sm tracking-[0.35em] text-ink"
        aria-hidden="true"
      >
        {text}
      </figcaption>
    </figure>
  );
}
