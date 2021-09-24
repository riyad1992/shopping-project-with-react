import React from 'react';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
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
                        <a href="/Shop">Shop</a>
                        <a href="/Order">Order Review</a>
                        <a href="/Inventory">Manage Inventory here</a>
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