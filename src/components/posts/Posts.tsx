import Link from 'next/link';
import styled from 'styled-components';
import { PostMeta } from '@/api/api';

const StyledPosts = styled.ul`
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    border: 1px solid;
    border-radius: 10px;
    margin-bottom: 24px;
    padding: 16px;
    a {
      font-size: 32px;
      font-weight: bold;
    }
    div {
      padding: 0 16px;
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
        transition: all 0.3s linear;
        &:hover {
          color: red;
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
