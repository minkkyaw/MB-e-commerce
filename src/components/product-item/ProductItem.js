import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/actions/cartActions";
import { CartSpan, CartInput } from "../../utils/global.styles";

const ProductItem = ({ item, addItemToCart, cartItems }) => {
  const [quantity, setQuantity] = useState(0);
  const [alreadyInCart, setAlreadyInCart] = useState(false);

  const { name, price, description, id } = item;

  useEffect(() => {
    let index = cartItems.findIndex(cartItem => cartItem.id === id);
    if (index > -1) {
      setAlreadyInCart(true);
      setQuantity(cartItems[index].quantity);
    }
  }, []);

  const handleIncrease = () => {
    if (quantity < 100) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    if (quantity === 0) setAlreadyInCart(false);
    else setAlreadyInCart(true);
    addItemToCart({ quantity, name, price, id });
  };

  const handleInputChange = e => {
    setQuantity(e.target.value);
  };

  return (
    <div
      style={{
        width: "25%",
        maxWidth: "300px",
        padding: 20,
        margin: "0 10px",
        boxShadow: "0 0 1px #ccc"
      }}
    >
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <p>
        <CartSpan onClick={handleDecrease}>&lt;</CartSpan>
        <CartInput
          type="number"
          onChange={handleInputChange}
          value={quantity}
        />
        <CartSpan onClick={handleIncrease}>&gt;</CartSpan>
      </p>
      <button onClick={handleAddToCart}>
        {alreadyInCart && quantity === 0
          ? `Remove`
          : alreadyInCart
          ? `Edit quantity`
          : "Add To Cart"}
      </button>
      <p>{description}</p>
    </div>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  cartItems: PropTypes.array.isRequired,
  addItemToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps, { addItemToCart })(ProductItem);
