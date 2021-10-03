import React from 'react';
import Features from '../Features/Features';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';


const Product = (props) => {
    const {img, name, seller, price, stock, star, features} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt=''/>
            </div>
            <div className='product-details'>
                <h3 className='name'>{name}</h3>
                <div className='details'>
                    <div>
                        <p>by: {seller}</p>
                        <h4 className='price'>Price: $ {price}</h4>
                        <p>only {stock} left in stock - order soon</p>
                        <button className='btn-regular' onClick={() => props.cartHandler(props.product)}>{element} Add To Cart</button>
                    </div>
                    <div className='features'>
                        <p><Rating 
                            emptySymbol="far fa-star icon-star"
                            fullSymbol="fas fa-star icon-star"
                            initialRating={star}
                            readonly
                        /></p>

                          <p>Features: </p> {features?.map(feature => <Features 
                            feature={feature}
                            key={feature?.description}
                            ></Features>)}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Product;