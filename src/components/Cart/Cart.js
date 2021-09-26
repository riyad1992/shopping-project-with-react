import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    let totalQuantity = 0
    let total = 0;
    let shipping = 0;
    // let shipping = cart.length === 0? 0 : 15;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity
        totalQuantity = totalQuantity + product.quantity
        shipping = shipping + product.shipping * product.quantity
    }
    // const totalReducer = (prevuser, product) => prevuser + product.price;
    // const total = cart.reduce(totalReducer, 0)
    
    const totalBeforTax = shipping + total;
    const tax = totalBeforTax /10;
    const grandTotal = totalBeforTax + tax
    return (
        <div>
            <div className='cart'>
                <h2>Order Summary</h2>
                <h4>Items ordered: {totalQuantity}</h4>
            </div>
            <div className='cart-details'>
                <div>
                    <h4>Total: </h4>
                    <p>Shipping & Handling: </p>
                    <p>Total before tax: </p>
                    <p>Estimated Tax: </p>
                    <h3 className='grand-total'>Order Total: </h3>
                </div>
                <div className='cart-calc'>
                    <h4>$ {total.toFixed(2)}</h4>
                    <p>$ {shipping}</p>
                    <p>$ {totalBeforTax.toFixed(2)}</p>
                    <p>$ {tax.toFixed(2)}</p>
                    <h3 className='grand-total'>$ {grandTotal.toFixed(2)}</h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;