import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllPosts, PostMeta } from '@/api/api';
import DefaultLayout from '@/components/layout/DefaultLayout';
import Posts from '@/components/posts/Posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));
  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

type Props = {
  slug: string;
  posts: PostMeta[];
};

export default function TagPage({ slug, posts }: Props) {
  return (
    <DefaultLayout>
      <Head>
        <title>Tag:{slug}</title>
      </Head>
      <h2 style={{ fontSize: '32px' }}>Tag: {slug}</h2>
      <Posts posts={posts} />
    </DefaultLayout>
  );
}
