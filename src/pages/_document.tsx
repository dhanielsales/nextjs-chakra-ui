import Document, { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
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
