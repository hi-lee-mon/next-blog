import '../styles/globals.scss';
import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme/theme';

const components = {
  h1: () => <h1 style={{ borderBottom: '1px solid red' }} />,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <Head>
          <link rel='icon' href='/kame.ico' />
          <meta name='description' content='shunのページ' />
        </Head>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
