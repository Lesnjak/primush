import '../styles/index.scss';

import Head from 'next/head';
import { Fragment } from 'react';

const App = (appProps: any) => {
  const { Component, pageProps } = appProps;

  return (
    <Fragment>
      <Head>
        <title>{`some`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" />
      </Head>
      <Fragment>
        <Component {...pageProps} />
      </Fragment>
    </Fragment>
  );
};

export default App;
