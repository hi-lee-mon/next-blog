import { GetStaticPaths, GetStaticProps } from 'next';
// TODO:ESLint解決
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'; // eslint-disable-line
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import { getPostFromSlug, getSlugs, PostMeta } from '@/api/api';
import Title from '@/components/Title';
import YouTube from '@/components/Youtube';
import DefaultLayout from '@/components/layout/DefaultLayout';
import 'highlight.js/styles/atom-one-dark.css';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }], rehypeHighlight],
    },
  });
  return {
    props: { post: { source: mdxSource, meta } },
  };
};

/**
 * Component
 */
type Props = {
  post: { source: MDXRemoteSerializeResult<Record<string, unknown>>; meta: PostMeta };
};

export default function PostPage({ post }: Props) {
  return (
    <DefaultLayout>
      <Head>
        <title>{Date.parse(post.meta.title)}</title>
      </Head>
      <Title title={post.meta.title} date={post.meta.date} />
      <MDXRemote {...post.source} components={{ YouTube, Image }} />
    </DefaultLayout>
  );
}
