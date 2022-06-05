import Link from 'next/link';
import styled from 'styled-components';

const StyledHeaderNav = styled.nav<{ open: boolean }>`
  ul {
    display: flex;
    li {
      letter-spacing: 0.2rem;
      padding: 0 20px;
    }
    a {
      padding: 5px 20px;
      border-bottom: 2px solid transparent;
      border-radius: 2px;
      transition: all 0.3s;
      &:hover {
        border-bottom: 2px solid #333;
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-flow: column nowrap;
      align-items: center;
      background-color: #0d2538;
      position: fixed;
      transform: ${({ open }) => (open ? 'translateX(-250px)' : '')};
      top: 0;
      right: -250px;
      height: 100vh;
      width: 250px;
      padding-top: 6rem;
      transition: all 0.3s ease-in-out;
    }
    li {
      color: #fff;
      margin-bottom: 30px;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: red;
      }
    }
    a {
      display: block;
      text-align: center;
    }
    ul li a {
      border-bottom: none;
      &:hover {
        border-bottom: none;
      }
    }
  }
`;

type Props = {
  open: boolean;
};

export default function HeaderNav({ open }: Props) {
  return (
    <StyledHeaderNav open={open}>
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
      </ul>
    </StyledHeaderNav>
  );
}
