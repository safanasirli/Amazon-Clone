import React from 'react';
import './CartItems.css';
import CartItem from './CartItem';



function CartItems() {
    return (
        <div className="cartItems__container">
            <div className="cartItems__title">Shopping Cart</div>
           <hr/>
           <div className="cartItems__itemsContainer">
                <CartItem/>
           </div>
        </div>
    )
}

export default CartItems
