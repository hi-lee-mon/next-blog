import Head from 'next/head';
import DefaultLayout from '@/components/layout/DefaultLayout';

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Home</title>
        <meta name='description' content='shunのホームページです' />
      </Head>
      <h1>Home</h1>
      <p>Homeページ製造中...</p>
    </DefaultLayout>
  );
}
