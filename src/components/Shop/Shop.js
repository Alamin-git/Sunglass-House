import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const [item, setItem] = useState([]);
    const addToCart = (product2) => {
        const newItem = [...item, product2];
        // let newCart = [];
        const exists = item.find(product => product.id === product2.id);
        if (!exists) {
            setItem(newItem);
        }
        else {
            alert('Item Already Selected');
        }
        // setItem(newCart);
    }

    return (
        <div className='products-container'>
            <div className="products">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <div className="cart-div">
                    <h2 className='cart-header'>Selected Items</h2>
                    <Cart item={item}></Cart>
                    <button className='btn'>Choose One For Me</button><br />
                    <button className='btn'>Remove All</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;