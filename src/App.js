import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import store from "./redux/store";
import { SET_CARTITEMS } from "./redux/types";
let cartItems = localStorage.cartItems;
if (cartItems) {
  cartItems = JSON.parse(cartItems);
  store.dispatch({ type: SET_CARTITEMS, payload: cartItems });
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/cart" component={() => <Cart />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
