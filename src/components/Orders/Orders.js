import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';

const Orders = () => {
    // custom hooks
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div className='shop-container'>
            <div className="products-container">

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;