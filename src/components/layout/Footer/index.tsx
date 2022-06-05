import Link from 'next/link';
import styled from 'styled-components';

// TODO:画面幅両端から30pxに統一するか？

const StyledFooter = styled.footer`
  border-top: 1px solid #000;
  padding: 30px;
  display: flex;
  justify-content: space-around;

  nav > ul > li {
    margin-bottom: 20px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>&copy;shun2022</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a href='#'>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/Blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/About'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/hi-lee-mon/next-blog'>
              <a target='_blank'>Git Hub</a>
            </Link>
          </li>
        </ul>
      </nav>
    </StyledFooter>
  );
}
