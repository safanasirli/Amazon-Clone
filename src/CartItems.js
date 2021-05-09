import React from "react";
import "./CartItems.css";
import CartItem from "./CartItem";

function CartItems({ cartItems }) {
  return (
    <div className="cartItems__container">
      <div className="cartItems__title">Shopping Cart</div>
      <hr />
      <div className="cartItems__itemsContainer">
        {cartItems.map((item) => (
          <CartItem id={item.id} item={item.product} />
        ))}
      </div>
    </div>
  );
}

export default CartItems;
