import CustmizedLink from '@/components/atoms/CustmizedLink';

export default function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>
        <CustmizedLink path='#' text='Shun' />
      </h1>
      <nav className='header__gnav'>
        <ul className='header__gnav__list'>
          <li className='header__gnav__item'>
            <CustmizedLink path='#' text='Blog' />
          </li>
          <li className='header__gnav__item'>
            <CustmizedLink path='#' text='About' />
          </li>
          <li className='header__gnav__item'>
            <CustmizedLink path='#' text='GitHub' />
          </li>
        </ul>
      </nav>
    </header>
  );
}
