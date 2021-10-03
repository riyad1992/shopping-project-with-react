import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import OrderItem from '../OrderItem/OrderItem';

const Order = (props) => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    const history = useHistory();

    const removeHandler = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart);
        removeFromDb(key)
    }
    const orderHandler = () => {
        history.push('/revieworder')
        setCart([])
        clearTheCart()
    }

    return (
        <div>
            <Header handleSearch={props.handleSearch} cart={cart}></Header>
            <div className='shop'>
                <div>
                    {
                        cart.map(product => <OrderItem removeHandler={removeHandler} product={product} key={product.key}></OrderItem>)
                    }
                </div>
                <div>
                    <Cart cart={cart}>
                        <button onClick={orderHandler} className='btn-regular'>Place Your Order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;