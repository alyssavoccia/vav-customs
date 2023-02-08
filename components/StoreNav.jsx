import Link from "next/link";
import styles from '@/styles/StoreNav.module.css';

const StoreNav = () => {
  return (
    <div className={styles.storeNav}>
      <ul className={styles.storeNavList}>
        <Link href='/store'>
          <li><strong>Store Home</strong></li>
        </Link>
        <Link href='/store/category/woodwork'>
          <li>Woodwork</li>
        </Link>
        <Link href='/store/category/plans'>
          <li>Plans</li>
        </Link>
        <Link href='/store/category/tools'>
          <li>Tools</li>
        </Link>
        <Link href='/store/category/merch'>
          <li>Merch</li>
        </Link>
      </ul>
    </div>
  )
}

export default StoreNav;