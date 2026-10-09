import Document, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext, DocumentInitialProps } from 'next/document'
import { localeFromPathname, localeMeta } from '@/i18n'

interface MyDocumentProps {
  htmlLang: string
}

export default class MyDocument extends Document<MyDocumentProps> {
  // O lang do <html> é o único atributo que só o _document escreve, e daqui não
  // há acesso às props da página — então o idioma sai da rota. Funciona porque
  // cada idioma tem a sua própria página exportada (/, /en, /es)
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps & MyDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx)
    const locale = localeFromPathname(ctx.pathname)

    return { ...initialProps, htmlLang: localeMeta[locale].htmlLang }
  }

  render() {
    return (
      <Html lang={this.props.htmlLang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
