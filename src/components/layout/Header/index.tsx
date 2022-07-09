import Link from 'next/link';
import styled from 'styled-components';
import HeaderNav from './HeaderNav';
import Humbarger from '@/components/layout/Header/Humbarger';

const HeaderLayout = styled.header`
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    letter-spacing: 0.5rem;
  }

  @media (max-width: 768px) {
    justify-content: normal;
    padding: 0 30px;
  }
`;

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function Header(props: Props) {
  return (
    <HeaderLayout>
      <h1>
        <Link href='/'>
          <a>Shun</a>
        </Link>
      </h1>
      <HeaderNav open={props.open} />
      <Humbarger {...props} />
    </HeaderLayout>
  );
}
