import React, { useState, useEffect } from "react";

import { Tr, Td, CartSpan, CartInput } from "../../utils/global.styles";
import { addItemToCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";

const CartItem = ({ cartItem, idx, addItemToCart }) => {
  const [quantity, setQuantity] = useState(0);
  useEffect(() => setQuantity(cartItem.quantity), []);

  const { id, name, price } = cartItem;
  let totalPrice = quantity * price;

  const handleIncrease = () => {
    if (quantity < 100) {
      addItemToCart({ id, quantity: quantity + 1, name, price });
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    addItemToCart({ id, quantity: quantity - 1, name, price });
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleRemove = () => {
    addItemToCart({
      id,
      quantity: 0,
      name,
      price
    });
  };
  const handleInputChange = e => {
    if (e.target.value === "0") {
      addItemToCart({
        id,
        quantity: 0,
        name,
        price
      });
    }
    if (e.target.value <= 100 && e.target.value >= 0)
      setQuantity(e.target.value);
  };

  const handleBlur = e => {
    if (e.target.value === "") e.target.value = quantity;
  };

  return (
    <Tr key={id}>
      <Td>{idx}</Td>
      <Td>
        {name}
        <CartSpan onClick={handleRemove}>X</CartSpan>
      </Td>
      <Td>{price}</Td>
      <Td>
        <CartSpan onClick={handleDecrease}>&lt;</CartSpan>
        <CartInput
          type="number"
          onChange={handleInputChange}
          value={quantity}
          onBlur={handleBlur}
        />
        <CartSpan onClick={handleIncrease}>&gt;</CartSpan>
      </Td>
      <Td>{totalPrice.toFixed(2)}</Td>
    </Tr>
  );
};

export default connect(null, { addItemToCart })(CartItem);
