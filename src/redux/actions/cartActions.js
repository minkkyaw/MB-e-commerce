import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CHECKOUT_CART
} from "../types";

export const addItemToCart = data => dispatch => {
  dispatch({ type: ADD_ITEM_TO_CART, payload: data });
};

export const removeItemFromCart = id => dispatch => {
  dispatch({ type: REMOVE_ITEM_FROM_CART, payload: id });
};

export const checkoutCart = data => dispatch => {
  dispatch({ type: CHECKOUT_CART, payload: data });
};
