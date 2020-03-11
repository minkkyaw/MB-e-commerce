import React, { Fragment } from "react";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <LogoContainer to="/">
          <h1>MB E-Commerce</h1>
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/home">Home</OptionLink>
          <OptionLink to="/cart">Cart</OptionLink>
        </OptionsContainer>
      </HeaderContainer>
    </Fragment>
  );
};

export default Navbar;
