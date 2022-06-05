import { useState } from 'react';
import styled from 'styled-components';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const Main = styled.main`
  // TODO:SPのpaddingは0 10px;。PCは考える。
  max-width: 1300px;
  margin: 0 auto;
`;

type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header {...{ open, setOpen }} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
