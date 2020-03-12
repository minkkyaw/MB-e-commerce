import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Table, Th, Tr, Td } from "../utils/global.styles";
import CartItem from "../components/cart-item/CartItem";
import { checkoutCart } from "../redux/actions/cartActions";

const Cart = ({ cartItems }) => {
  return (
    <Table>
      <tbody>
        <tr>
          <Th>No.</Th>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th style={{ width: 150 }}>Quantity</Th>
          <Th>Total</Th>
        </tr>
        {cartItems.map((item, i) => {
          return <CartItem key={item.id} cartItem={item} idx={i + 1} />;
        })}
        <Tr>
          <Td colSpan={4}>Total</Td>
          <Td>
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </Td>
        </Tr>
      </tbody>
    </Table>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps, { checkoutCart })(Cart);
