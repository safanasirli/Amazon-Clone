import React from 'react';
import './CartTotal.css';
import NumberFormat from 'react-number-format';

function CartTotal({getTotalPrice,getCount}) {

    return (
        <div className="cartTotal__container">
            <div className="cartTotal__subtotal">Subtotal ({getCount()} items): 
       <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} /></div>
            <div className="cartTotal__button">Proceed to Checkout</div>
        </div>
    )
}

export default CartTotal
