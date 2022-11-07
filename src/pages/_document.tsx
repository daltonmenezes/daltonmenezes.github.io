import Document, { Head, Html, Main, NextScript } from 'next/document'

import { getCssText } from 'styles'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000000" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link rel="icon" href="/favicon.png" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
