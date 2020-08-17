import Document, { Html, Head, Main, NextScript } from "next/document";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  // setGoogleTags() {
  //   if (publicRuntimeConfig.PRODUCTION) {
  //     return {
  //       __html: `
  //         window.dataLayer = window.dataLayer || [];
  //         function gtag(){dataLayer.push(arguments);}
  //         gtag('js', new Date());

  //         gtag('config', 'UA-173543099-1');
  //       `,
  //     };
  //   }
  // }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <title>Brana Yoga </title>
          <base target="_blank" rel="noopener noreferrer" />
          <meta
            name="description"
            content="Brana Yoga. Best yoga info for a happier and healthier life."
          />
          <meta property="og:type" content="Website" />
          <meta
            name="image"
            property="og:image"
            content="https://i.postimg.cc/0NzFmhfn/branayoga.png"
          />
          <meta
            name="description"
            property="og:description"
            content="Brana Yoga. Connect breath with movement."
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          {/* <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          /> */}

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon_io/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon_io/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon_io/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon_io/site.webmanifest" />

          <link rel="stylesheet" href="/static/css/styles.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-173543099-1"
          ></script>
          <script dangerouslySetInnerHTML={this.setGoogleTags()} /> */}
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
