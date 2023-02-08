import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartContext from "@/context/CartContext";
import LineItem from "./LineItem";
import styles from '@/styles/Cart.module.css';

const Cart = () => {
  const { isCartOpen, checkout, dispatch } = useContext(CartContext);
  const [lineItems, setLineItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const openCheckout = () => {
    window.open(checkout.webUrl);
  };

  useEffect(() => {
    if (checkout) {
      console.log(checkout)
      setLineItems(checkout.lineItems.map(line_item => {
        console.log(line_item)
        return (
          <LineItem key={line_item.id.toString()} lineItem={line_item} />
        )
      }));
      setLoading(false);
    }
  }, [checkout]);

  if (!loading) {
    return (
      <div className={`${styles.cart} ${isCartOpen && styles.cartOpen}`}>
        <header className={styles.cartHeader}>
          <p>Your Cart</p>
          <button className={styles.cartClose} onClick={() => dispatch({ type: 'CLOSE_CART' })}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </header>
        <ul className={styles.lineItemsList}>
          {lineItems}
        </ul>
        <div className={styles.cartFooter}>
          <div className={styles.cartInfo}>
            <div className={styles.cartPrice}>
              <p>Subtotal</p>
              <p>${checkout.lineItemsSubtotalPrice.amount}</p>
            </div>
            <p className={styles.priceSmall}>Taxes & Shipping Determined at Checkout</p>
          </div>
          <button className={styles.checkoutBtn} disabled={checkout.lineItems.length === 0} onClick={openCheckout}>Checkout</button>
        </div>
      </div>
    )
  }
}

export default Cart;