import React from 'react';
import './Product.css';

function Product({title,price,rating,image, id}) {
    return (
        <div className="product__container">
           <div className="product__title">{title}</div>
           <div className="product__price">${price}</div>
           <div className="product__rating">
            {Array(rating)
            .fill()
            .map(rating=><p>⭐️</p>
            )}
           </div>
           <img src= {image} className="product__image"/>
           <div className="button__container">
            <button className="product__addToCart"> Add to Cart</button>
           </div>
        </div>
    )
}

export default Product
