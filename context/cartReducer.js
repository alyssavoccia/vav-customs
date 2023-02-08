export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'CHECKOUT_FOUND':
      return {
        ...state,
        checkout: action.payload
      }
    case 'ADD_VARIANT_TO_CART':
      return {
        ...state,
        isCartOpen: true,
        checkout: action.payload
      }
    case 'UPDATE_QUANTITY_IN_CART':
      return {
        ...state,
        checkout: action.payload
      }
    case 'REMOVE_LINE_ITEM_IN_CART':
      return {
        ...state,
        checkout: action.payload
      }
    case 'UPDATE_TOTAL_ITEMS_IN_CART':
      return {
        ...state,
        totalItemsInCart: action.payload
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