import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from '@/styles/Navbar.module.css';
import CartContext from "@/context/CartContext";

const Navbar = () => {
  const { checkout, dispatch } = useContext(CartContext);
  const router = useRouter();
  const [totalItems, setTotalItems] = useState(0);
  const [active, setActive] = useState(styles.menu);
  const [mobileIcon, setMobileIcon] = useState(styles.toggler);

  useEffect(() => {
    if (checkout) {
      checkout.lineItems.map(lineItem => {
        setTotalItems(prevState => prevState + lineItem.quantity);
      });
    }
  }, [checkout]);

  const navToggle = () => {
    if (window.innerWidth < 768) {
      active === styles.menu ? setActive(`${styles.menu} ${styles.menuActive}`) : setActive(styles.menu);
    }

    // Icon toggle
    mobileIcon === styles.toggler ? setMobileIcon(`${styles.toggler} ${styles.toggle}`) : setMobileIcon(styles.toggler);
  }

  return (
    <nav className={styles.navbar}>
      <Link href='/' passHref>
        <img className={styles.logo} src='/images/mini-logo.png' alt='VAV Customs Logo' />
      </Link>
      <div className={styles.linksCart}>
        <ul className={active}>
          <li>
            <Link onClick={navToggle} href='/#about'>About</Link>
          </li>
          <li>
            <Link className={router.pathname === '/the-shop' ? styles.activeMenu : ''} onClick={navToggle} href='/the-shop'>The Shop</Link>
          </li>
          <li>
            <Link className={router.pathname === '/blog' ? styles.activeMenu : ''} onClick={navToggle} href='/blog'>Blog</Link>
          </li>
          <li>
            <Link className={router.pathname === '/custom-build' ? styles.activeMenu : ''} onClick={navToggle} href='/custom-build'>Custom Build</Link>
          </li>
          <li>
            <Link className={router.pathname.includes('/store') &&  styles.activeMenu} onClick={navToggle} href='/store'>Store</Link>
          </li>
        </ul>
        <div className={styles.viewCart} onClick={() => dispatch({ type: 'OPEN_CART' })}>
          <FontAwesomeIcon className={styles.cartIcon} icon={faCartShopping} />
          <span className={styles.cartCount}>{checkout && totalItems}</span>
        </div>
        <div onClick={navToggle} className={mobileIcon}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;