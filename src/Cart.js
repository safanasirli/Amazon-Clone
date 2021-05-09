import React from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import "./Cart.css";

function Cart({ cartItems }) {
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.price * item.product.quantity;
    });
    return total;
  };

  const getCount = () => {
    let count = 0;

    cartItems.forEach((item) => {
      count += item.product.quantity;
    });
    return count;
  };

  return (
    <div className="cart__container">
      <CartItems cartItems={cartItems} />
      <CartTotal getCount={getCount} getTotalPrice={getTotalPrice} />
    </div>
  );
}

export default Cart;
