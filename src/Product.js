import React from "react";
import "./Product.css";
import { db } from "./firebase";

function Product({ name, price, rating, image, id }) {
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartItems").doc(id).set({
          name: name,
          image: image,
          price: price,
          quantity: 1,
        });
      }
    });
  };
  return (
    <div className="product__container">
      <div className="product__title">{name}</div>
      <div className="product__price">${price}</div>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((rating) => (
            <span>⭐️</span>
          ))}
      </div>
      <img src={image} className="product__image" alt="product" />
      <div className="button__container">
        <button className="product__addToCart" onClick={addToCart}>
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
