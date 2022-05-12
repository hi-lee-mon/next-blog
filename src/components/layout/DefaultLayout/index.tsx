import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

type Props = {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      < Footer />
    </>
  )
}