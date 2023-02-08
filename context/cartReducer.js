export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'CHECKOUT_FOUND':
      return {
        ...state,
        checkout: action.payload
      }
    case 'OPEN_CART':
      return {
        ...state,
        isCartOpen: true
      }
    case 'CLOSE_CART':
      return {
        ...state,
        isCartOpen: false
      }
    default:
      return state;
  }
};