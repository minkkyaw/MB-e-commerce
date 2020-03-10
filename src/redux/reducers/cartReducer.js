import {
  REMOVE_ITEM_FROM_CART,
  ADD_ITEM_TO_CART,
  CHECKOUT_CART
} from "../types";

const initialState = {
  cartItems: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM_FROM_CART:
      let index = state.cartItems.findIndex(item => item.id === action.payload);
      state.cartItems.splice(index, 1);
      return { ...state, cartItems: [...state.cartItems] };
    case ADD_ITEM_TO_CART:
      state.cartItems.push(action.payload);
      return { ...state, cartItems: [...state.cartItems] };
    default:
      return state;
  }
};
