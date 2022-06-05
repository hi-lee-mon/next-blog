import Head from 'next/head';
import Link from 'next/link';
import DefaultLayout from '@/components/layout/DefaultLayout';

export default function Blog() {
  return (
    <DefaultLayout>
      <Head>
        <title>Blog</title>
        <meta name='description' content='shunのBlogページ' />
      </Head>
      <h1>Blog</h1>
      <p>Blogページ製造中...</p>
    </DefaultLayout>
  );
}
