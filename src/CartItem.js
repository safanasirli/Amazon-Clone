import React from 'react';
import './CartItem.css';

function CartItem() {
    return (
        <div className="cartItem__container">
            <div className="cartItem__image">
               <img src="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"/>
            </div>
            <div className="cartItem__info">
                <div className="cartItem__infoTop">
                    <h2>2020 Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)</h2>
                </div>
                <div className="cartItem__infoBottom">
                    <div className="cartItem__quantity">5</div>
                    <div className="cartItem__delete">Delete</div>
                </div>
            </div>
            <div className="cartItem__price">$999</div>
        </div>
    )
}

export default CartItem
