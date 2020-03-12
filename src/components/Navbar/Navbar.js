import React, { Fragment } from "react";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./Navbar.styles";
import { connect } from "react-redux";

const Navbar = ({ cartItems }) => {
  return (
    <Fragment>
      <HeaderContainer>
        <LogoContainer to="/">
          <h1>MB E-Commerce</h1>
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/home">Home</OptionLink>
          <OptionLink to="/cart">
            Cart{" "}
            <span
              style={{
                borderRadius: 10,
                backgroundColor: "#333",
                color: "#fff",
                padding: 10,
                margin: 10
              }}
            >
              {cartItems.reduce(
                (total, cartItem) => total + cartItem.quantity,
                0
              )}
            </span>
          </OptionLink>
        </OptionsContainer>
      </HeaderContainer>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(Navbar);
