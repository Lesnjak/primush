import '../styles/index.scss';
import ReactNotification from 'react-notifications-component';
import Head from 'next/head';
import { Fragment } from 'react';

const App = (appProps: any) => {
  const { Component, pageProps } = appProps;

  return (
    <Fragment>
      <Head>
        <title>{`PRIMUSH`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" />
      </Head>
      <Fragment>
        <Component {...pageProps} />
        <ReactNotification />
      </Fragment>
    </Fragment>
  );
};

export default App;
