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
          <meta charSet='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <meta
            name='description'
            content='Hacker News Clone using Nextjs and API from node-hnapi'
          />

          <link rel='manifest' href='/manifest.json' />
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
          <link rel='canonical' href='http://example.com/' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-title'
            content='Hacker News Clone By HaYePe'
          />
          <meta name='theme-color' content='#00a8cc' />
          <meta
            itemProp='name'
            content='Hacker News Clone using API From node-hnapi'
          />
          <meta
            itemProp='description'
            content='Hei, collaborate with me, just send me a request to ...@@'
          ></meta>
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
