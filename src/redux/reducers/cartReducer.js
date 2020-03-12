import {
  REMOVE_ITEM_FROM_CART,
  ADD_ITEM_TO_CART,
  CHECKOUT_CART,
  SET_CARTITEMS
} from "../types";

const initialState = {
  cartItems: []
};

export default (state = initialState, action) => {
  let cartItems;
  switch (action.type) {
    case SET_CARTITEMS:
      return { ...state, cartItems: action.payload };
    case REMOVE_ITEM_FROM_CART:
      cartItems = [...state.cartItems];
      let removeIndex = state.cartItems.findIndex(
        item => item.productId === action.payload.productId
      );
      state.cartItems.splice(removeIndex, 1);
      localStorage.setItem(
        "cartItems",
        JSON.stringify({ ...state, cartItems })
      );
      return { ...state, cartItems: [...state.cartItems] };
    case ADD_ITEM_TO_CART:
      cartItems = [...state.cartItems];
      console.log(action.payload);
      let index = cartItems.findIndex(item => item.id === action.payload.id);
      if (index > -1) {
        if (action.payload.quantity <= 0) {
          cartItems.splice(index, 1);
        } else {
          cartItems[index].quantity = action.payload.quantity;
        }
      } else {
        cartItems.push(action.payload);
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cartItems };
    default:
      return state;
  }
};
