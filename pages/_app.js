import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <title>{process.env.SITE_NAME}</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
