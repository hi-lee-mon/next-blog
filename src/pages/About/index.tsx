import Head from 'next/head';
import Link from 'next/link';
import DefaultLayout from '@/components/layout/DefaultLayout';

export default function About() {
  return (
    <DefaultLayout>
      <Head>
        <title>About</title>
        <meta name='description' content='shunのAboutページ' />
      </Head>
      <h1>About</h1>
      <p>Aboutページ製造中...</p>
    </DefaultLayout>
  );
}
