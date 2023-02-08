import styles from '@/styles/LineItem.module.css';

const LineItem = ({ lineItem }) => {
  console.log(lineItem)
  return (
    <li className={styles.lineItem}>
      <img className={styles.itemImg} src={lineItem.variant.image.src} alt={lineItem.title} />
      <div className={styles.itemContent}>
        <div className={styles.contentHeader}>
          <span className={styles.itemTitle}>{lineItem.title}</span>
          <span className={styles.itemPrice}>${parseFloat(lineItem.quantity * lineItem.variant.price.amount).toFixed(2)}</span>
        </div>
        <div className={styles.contentFooter}>
          <div className={styles.quantityContainer}>
            <button className={`${styles.quantityUpdate} ${styles.minus}`}>-</button>
            <span className={styles.quantity}>{lineItem.quantity}</span>
            <button className={styles.quantityUpdate}>+</button>
          </div>
          <p className={styles.itemRemove}>Remove</p>
        </div>
      </div>
    </li>
  )
}

export default LineItem;