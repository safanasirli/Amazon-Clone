import React from 'react';
import './Header.css';
import  SearchIcon  from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';

function Header({ cartItems }) {

    const getCount = ()=>{
        let count = 0;

        cartItems.forEach((item)=> {
            count += item.product.quantity;
        })
        return count;
    }

    return (
        <div className="header">
        <Link to="/">
            <img className="header__logo" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/> 
        </Link>
            <div className="header__optionAddress">
                 <LocationOnIcon/>
                <div className= "header__option">
                    <span className="header__optionLineOne">Hello </span>
                    <span className="header__optionLineTwo">Select your address</span>
                </div>
            </div>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <div className="header__searchIcon">
                    <SearchIcon/>
                </div>
            </div>
            <div className="header__nav">
                <div className= "header__option">
                    <span className="header__optionLineOne">Hello,Sign In</span>
                    <span className="header__optionLineTwo"> Account & Lists</span>
                </div>
                <div className= "header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                    <div className="header__optionCart">
                     <Link className="cart__link" to="/cart">
                        <ShoppingCartIcon/>
                        <span className="header__cartCount">{getCount()}</span>
                    </Link>
                    </div>
            </div>
        </div>
    )
}

export default Header;
