import type { NextPage } from 'next';
import Head from 'next/head';
import DefaultLayout from '@/components/layout/DefaultLayout';

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>shun blog</title>
        <link rel='icon' href='/kame.ico' />
        <meta name='description' content='shunのブログです' />
      </Head>
    </DefaultLayout>
  );
};

export default Home;
