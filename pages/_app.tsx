import { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import MainLayout from 'sections/shared/layout/MainLayout';

import 'styles/scss/style.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>UMA&mdash;Universal Market Access</title>

        <meta
          name="description"
          content="A decentralized financial contracts platform built to enable Universal Market Access"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@UMAprotocol" />
        <meta name="twitter:title" content="UMA&mdash;Universal Market Access" />
        <meta
          name="twitter:image"
          content="https://umaproject.org/assets/images/UMA_square_red_logo.png"
        />
        <meta
          property="twitter:description"
          content="A decentralized financial contracts platform built to enable Universal Market Access"
        />
        <meta property="og:title" content="UMA&mdash;Universal Market Access" />
        <meta
          property="og:image"
          content="https://umaproject.org/assets/images/UMA_square_red_logo.png"
        />
        <meta
          property="og:description"
          content="A decentralized financial contracts platform built to enable Universal Market Access"
        />
        <meta property="og:url" content="https://umaproject.org" />

        <link rel="icon" type="image/png" href="assets/images/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="assets/images/favicon-16x16.png" sizes="16x16" />
        <link rel="mask-icon" href="assets/images/safari-pinned-tab.svg" color="#FF4A4A" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
};

export default App;
