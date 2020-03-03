import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='manifest' href='manifest.json' />

          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='application-name' content='hacker-news-clone' />
          <meta name='apple-mobile-web-app-title' content='hacker-news-clone' />
          <meta name='theme-color' content='#ff6600' />
          <meta name='msapplication-navbutton-color' content='#ff6600' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='black-translucent'
          />
          <meta name='msapplication-starturl' content='/' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />

          <link
            rel='icon'
            type='image/png'
            sizes='512x512'
            href='/icons/icon-512x512.png'
          />
          <link
            rel='apple-touch-icon'
            type='image/png'
            sizes='512x512'
            href='/icons/icon-512x512.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
