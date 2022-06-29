import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import { getPostFromSlug, getSlugs, PostMeta } from '@/api/api';
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
        <title>{post.meta.title}</title>
      </Head>
      <h1>{post.meta.title}</h1>
      <MDXRemote {...post.source} components={{ YouTube, Image }} />
    </DefaultLayout>
  );
}
