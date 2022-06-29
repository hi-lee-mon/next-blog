import Head from 'next/head';
import { getAllPosts, PostMeta } from '@/api/api';
import DefaultLayout from '@/components/layout/DefaultLayout';
import Posts from '@/components/posts/Posts';

type Props = {
  posts: PostMeta[];
};

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);
  return { props: { posts } };
}

export default function Blog({ posts }: Props) {
  return (
    <DefaultLayout>
      <Head>
        <title>Blog</title>
        <meta name='description' content='shunのBlogページ' />
      </Head>
      <h2 style={{ fontSize: '32px' }}>Blog</h2>
      <Posts posts={posts} />
    </DefaultLayout>
  );
}
