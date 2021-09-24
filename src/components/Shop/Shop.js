import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])

    const handleSearch= event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product=> product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProduct)
    }

    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)
        });
    } ,[])

    useEffect(() => {
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addedProdect = products.find(product => product.key === key)
                if(addedProdect){
                    const quantity = savedCart[key];
                    addedProdect.quantity = quantity;
                    storedCart.push(addedProdect)
                }
            }
            setCart(storedCart)
        }
    }, [products])

    const cartHandler = (product) => {
        let istrue = false;
        for(const pro of cart){
            if(pro.key === product.key){
                istrue = true;
                pro.quantity = pro.quantity +1;
            }
            if(!istrue){
                const newCart = [...cart, product]
                setCart(newCart)
            }else{
                const newCart = [...cart]
                setCart(newCart)
            }
        }
        
        addToDb(product.key)
    }

    return (
        <div>
            <Header handleSearch={handleSearch} cart={cart}></Header>
            <div className='shop'>
                <div className='shop-product'>
                    {
                        displayProducts.map(product => <Product 
                            product={product}
                            key={product.key}
                            cartHandler = {cartHandler}
                            >

                            </Product>)
                    }
                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;