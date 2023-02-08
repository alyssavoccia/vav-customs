import Link from "next/link";
import styles from '@/styles/StoreCategories.module.css';

const StoreCategories = () => {
  return (
    <div className={styles.categoriesContainer}>
      <Link href='/store/category/woodwork' className={styles.category}>
        <p>Woodwork</p>
        <img src="/images/grid-images/bathroom1.jpg" alt="Custom woodwork" />
      </Link>
      <Link href='/store/category/plans' className={styles.category}>
        <p>Plans</p>
        <img src="/images/plans.jpg" alt="Image of plans" />
      </Link>
      <Link href='/store/category/tools' className={styles.category}>
        <p>Tools</p>
        <img src="/images/tools.jpeg" alt="Picture of tools" />
      </Link>
      <Link href='/store/category/merch' className={styles.category}>
        <p>Merch</p>
        <img src="/images/apparel.jpg" alt="Picture of apparel" />
      </Link>
    </div>
  )
}

export default StoreCategories;