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
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Regular.ttf"
          as="font"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <Fragment>
        <Component {...pageProps} />
        <ReactNotification />
      </Fragment>
    </Fragment>
  );
};

export default App;
