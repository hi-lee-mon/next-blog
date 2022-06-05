import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='icon' href='/kame.ico' />
        <meta name='description' content='shunのページ' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
