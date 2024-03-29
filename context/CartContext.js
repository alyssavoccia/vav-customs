import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { updateTotalItemsInCart } from "./cartActions";
import { shopifyClient } from "@/lib/shopify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    isCartOpen: false,
    checkout: null,
    totalItemsInCart: 0
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const createCheckout = async () => {
    const checkout = await shopifyClient.checkout.create();
    localStorage.setItem('checkout_id', checkout.id);
  };

  const updateCartItemsLength = async (checkout) => {
    const totalItems = await updateTotalItemsInCart(checkout);
    dispatch({ type: 'UPDATE_TOTAL_ITEMS_IN_CART', payload: totalItems });
  };
  
  const fetchCheckout = async (checkoutId) => {
    shopifyClient.checkout.fetch(checkoutId).then(checkout => {
      dispatch({ type: 'CHECKOUT_FOUND', payload: checkout });
      updateCartItemsLength(checkout);
    });
  };
  
  useEffect(() => {
    if (localStorage.checkout_id) {
      fetchCheckout(localStorage.checkout_id);
    } else {
      createCheckout();
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;