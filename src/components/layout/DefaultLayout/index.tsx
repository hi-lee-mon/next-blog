import { useState } from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header {...{ open, setOpen }} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
