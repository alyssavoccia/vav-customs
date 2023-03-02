import Link from "next/link";
import styles from '@/styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/store/product/${product.handle}`} className={styles.productCard}>
      <img src={product.variants[0].image.src} alt={product.title} />
      <div className={styles.productCardBody}>
        <p className={styles.productCardTitle}>{product.title}</p>
      </div>
      <div className={styles.productCardFooter}>
        <p>${parseFloat(product.variants[0].price.amount).toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default ProductCard;