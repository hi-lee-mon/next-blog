import Link from 'next/link';
import styled from 'styled-components';

// TODO:画面幅両端から30pxに統一するか？

const StyledFooter = styled.footer`
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
            <Link href='#'>
              <a href='#'>Home</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a href='#'>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a href='#'>About</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a href='#'>Git Hub</a>
            </Link>
          </li>
        </ul>
      </nav>
    </StyledFooter>
  );
}
