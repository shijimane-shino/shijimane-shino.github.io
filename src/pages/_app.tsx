import * as React from "react";

import { AppProps } from "next/app";
import Head from "next/head";

import "semantic-ui-css/semantic.min.css";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
