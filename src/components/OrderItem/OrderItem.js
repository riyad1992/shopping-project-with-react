import React from 'react';

const OrderItem = (props) => {
    const {name, quantity, price, key} = props.product
    return (
        <div className="product">
            <div className="product-details">
                <h3 className="name">{name}</h3>
                <p>quantity: {quantity}</p>
                <h3>price: {price}</h3>
                <button onClick={() => {props.removeHandler(key)}} className='btn-regular'> Remove</button>
            </div>
        </div>
    );
};

export default OrderItem;