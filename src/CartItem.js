import React from "react";
import "./CartItem.css";
import { db } from "./firebase";

function CartItem({ id, item }) {
  const deleteItem = (e) => {
    e.preventDefault();
    db.collection("cartItems").doc(id).delete();
  };

  let options = [];
  for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
    options.push(<option value={i}>Qty: {i}</option>);
  }

  const changeQuantity = (newQuantity) => {
    db.collection("cartItems")
      .doc(id)
      .update({
        quantity: parseInt(newQuantity),
      });
  };
  return (
    <div className="cartItem__container">
      <div className="cartItem__image">
        <img src={item.image} />
      </div>
      <div className="cartItem__info">
        <div className="cartItem__infoTop">
          <h2>{item.name}</h2>
        </div>
        <div className="cartItem__infoBottom">
          <div className="cartItem__quantity">
            <select
              value={item.quantity}
              onChange={(e) => changeQuantity(e.target.value)}
            >
              {options}
            </select>
          </div>
          <div className="cartItem__delete" onClick={deleteItem}>
            {" "}
            Delete
          </div>
        </div>
      </div>
      <div className="cartItem__price">${item.price}</div>
    </div>
  );
}

export default CartItem;
