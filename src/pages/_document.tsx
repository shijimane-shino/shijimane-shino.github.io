import * as React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";
import { mediaStyles } from "../components/media";

/**
 *
 */
export default class CustomDocument extends Document {
  /**
   *
   * @return {React.ReactElement}
   */
  render(): React.ReactElement {
    return (
      <Html lang="ja-JP">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="description" content={process.env.DESCRIPTION} />
          <meta name="author" content={process.env.AUTHOR} />
          <link rel="canonical" href={process.env.URL} />

          <meta property="og:site_name" content={process.env.TITLE} />
          <meta property="og:title" content={process.env.TITLE} />
          <meta property="og:description" content={process.env.DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={process.env.URL} />
          <meta
            property="og:image"
            content={`${process.env.URL}/img/default.png`}
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={process.env.URL} />
          <meta
            name="twitter:image"
            content={`${process.env.URL}/img/default.png`}
          />

          <link rel="icon" type="image/x-icon" href="/img/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/img/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/img/favicon-16x16.png"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />

          <style
            type="text/css"
            dangerouslySetInnerHTML={{ __html: mediaStyles }}
          />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.TRACKING_ID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.TRACKING_ID}', {
                page_path: window.location.pathname
              });
            `,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
