import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import cartReducer from "./reducers/cartReducer";

const middleware = [thunk];

const initialState = {};

const reducers = combineReducers({
  cart: cartReducer
});

let store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
