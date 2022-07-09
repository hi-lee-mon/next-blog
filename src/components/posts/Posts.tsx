import Link from 'next/link';
import styled from 'styled-components';
import { PostMeta } from '@/api/api';

const StyledPosts = styled.ul`
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    border-radius: 50px;
    background: #051923;
    box-shadow: inset 5px 5px 3px #031016, inset -5px -5px 3px #072230;

    margin-bottom: 24px;
    padding: 16px;
    a {
      font-size: 32px;
      padding: 8px;
      font-weight: bold;
      display: inline-block;
      transition: all 0.3s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
    }

    div {
      padding: 0 24px;
      span {
        margin-right: 8px;
      }
      p {
        font-size: 16px;
      }
      p > a {
        display: inline-block;
        font-size: 16px;
        margin-right: 24px;
        padding: 0;
        transition: all 0.2s linear;
        &:hover {
          opacity: 1;
          transform: perspective(100px) translateZ(16px);
        }
      }
    }
  }
`;

type Props = {
  posts: PostMeta[];
};

export default function Posts({ posts }: Props) {
  return (
    <StyledPosts>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/Posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
          <div>
            <p>{post.excerpt}</p>
            <p>
              <span>Tags:</span>
              {post.tags.map((tag) => (
                <Link key={tag} href={`/Tags/${tag}`}>
                  <a>{tag}</a>
                </Link>
              ))}
            </p>
          </div>
        </li>
      ))}
    </StyledPosts>
  );
}
