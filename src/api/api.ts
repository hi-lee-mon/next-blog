import fs from 'fs';
import path from 'path';
import { sync } from 'glob';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'posts').replace(/\\/g, '/'); //=> C:/dev/next-blog/posts

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.mdx`); //=> ['C:/dev/next-blog/posts/sample.mdx',"",""]
  const slugs = paths.map((path) => {
    const parts = path.split('/'); //=> [ 'C:', 'dev', 'next-blog', 'posts', 'sample.mdx' ]
    const filename = parts.at(-1) ?? ''; //=> 'sample.mdx'
    const [slug, _extension] = filename.split('.'); // => slug is sample
    return slug;
  });

  return slugs;
};

export type PostMeta = {
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
};

type Post = {
  content: string;
  meta: PostMeta;
};

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`); //=> C:\dev\next-blog\posts\sample.mdx
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? '',
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
    },
  };
};

export const getAllPosts = () => {
  const slugs = getSlugs();
  const posts = slugs.map((slug) => getPostFromSlug(slug));
  const sortedPosts = posts
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse(); // descending order

  return sortedPosts;
};
