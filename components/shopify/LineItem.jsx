import { useContext } from 'react';
import { shopifyClient } from '@/lib/shopify';
import { updateTotalItemsInCart, updateQuantityInCart, removeLineItemInCart } from '@/context/cartActions';
import CartContext from '@/context/CartContext';
import styles from '@/styles/LineItem.module.css';

const LineItem = ({ lineItem }) => {
  const { checkout, dispatch } = useContext(CartContext);

  const updateTotalItems = async (newCheckoutObj) => {
    const totalItems = await updateTotalItemsInCart(newCheckoutObj);
    console.log(totalItems)
    dispatch({ type: 'UPDATE_TOTAL_ITEMS_IN_CART', payload: totalItems });
  };

  const decrementQuantity = async (lineItemId) => {
    const updatedQuantity = lineItem.quantity - 1;
    const updatedCheckoutObj = await updateQuantityInCart(shopifyClient, checkout, lineItemId, updatedQuantity);
    dispatch({ type: 'UPDATE_QUANTITY_IN_CART', payload: updatedCheckoutObj });
    updateTotalItems(updatedCheckoutObj);
  };

  const incrementQuantity = async (lineItemId) => {
    const updatedQuantity = lineItem.quantity + 1;
    const updatedCheckoutObj = await updateQuantityInCart(shopifyClient, checkout, lineItemId, updatedQuantity);
    dispatch({ type: 'UPDATE_QUANTITY_IN_CART', payload: updatedCheckoutObj });
    updateTotalItems(updatedCheckoutObj);
  };

  const removeLineItem = async (lineItemId) => {
    const updatedCheckoutObj = await removeLineItemInCart(shopifyClient, checkout, lineItemId);
    dispatch({ type: 'REMOVE_LINE_ITEM_IN_CART', payload: updatedCheckoutObj });
    updateTotalItems(updatedCheckoutObj);
  };

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
            <button className={`${styles.quantityUpdate} ${styles.minus}`} onClick={() => decrementQuantity(lineItem.id)}>-</button>
            <span className={styles.quantity}>{lineItem.quantity}</span>
            <button className={styles.quantityUpdate} onClick={() => incrementQuantity(lineItem.id)}>+</button>
          </div>
          <p className={styles.itemRemove} onClick={() => removeLineItem(lineItem.id)}>Remove</p>
        </div>
      </div>
    </li>
  )
}

export default LineItem;