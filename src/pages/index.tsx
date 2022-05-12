import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '@/components/layout/DefaultLayout'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>shun blog</title>
        <link rel="icon" href="/kame.ico" />
      </Head>
      <article className="article">
        <header className="article__header">
          <h2 className="article__header__heading">
            <a className="article__header__link" href="">HTML,CSSでブログ作ってみた</a>
          </h2>
        </header>
        <section className="article__info">
          <time className="article__info__date">2022.01.01</time>
        </section>
        <section className="article__body">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quibusdam, esse possimus quod mollitia,
            consequuntur debitis molestiae magni obcaecati reprehenderit suscipit voluptatem ipsam! Tempore, molestiae eum
            autem nesciunt quibusdam perferendis?
            Animi commodi vel quis voluptatem molestias aliquid reiciendis veniam debitis vitae mollitia porro aut placeat
            recusandae, facilis hic nobis optio quod laborum iste. Perspiciatis necessitatibus, dolor exercitationem
            inventore quae quod.
            Eveniet doloremque blanditiis odio facere cupiditate illum culpa, iure atque assumenda omnis laudantium at
            veritatis! Dolorem maxime architecto libero magni quasi aliquid harum. Illum ab nisi consequatur eveniet quis
            illo.</p>
        </section>
        <nav className="article__nav">
          <a className="article__nav__link" href="">全文を見る</a>
        </nav>
      </article>
    </DefaultLayout>
  )
}

export default Home
