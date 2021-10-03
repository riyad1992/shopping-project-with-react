import React from 'react';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = (props) => {
    const {cart} = props
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    let totalQuantity = 0
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        totalQuantity = totalQuantity + product.quantity
    }

    return (
        <div>
            <header className='header'>
                <img src={logo} alt=''/>
                <nav className='header-menu'>
                    <div className='menu'>
                        <Link to="/shop">Shop</Link>
                        <Link to="/order">Order Review</Link>
                        <Link to="/invantory">Manage Inventory here</Link>
                    </div>
                    <div className='search-field'>
                        <input onChange={props.handleSearch} type='text' placeholder='type here to search'/>
                        <button>{element} {totalQuantity}</button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;