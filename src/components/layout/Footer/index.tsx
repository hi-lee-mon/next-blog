import CustmizedLink from "@/components/atoms/CustmizedLink";

export default function Footer() {
  return (
    <footer className="footer" >
      <div className="footer__copyright">&copy;shun</div>
      <nav className="footer__gnav">
        <ul className="footer__gnav__list">
          <li className="footer__gnav__item">
            <CustmizedLink path="#" text="Blog" />
          </li>
          <li className="footer__gnav__item">
            <CustmizedLink path="#" text="About" />
          </li>
          <li className="footer__gnav__item">
            <CustmizedLink path="#" text="GitHub" />
          </li>
        </ul>
      </nav>
    </footer>
  )
}