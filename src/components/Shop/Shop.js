import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import RandomOne from '../RandomOne/RandomOne';
import './Shop.css'

const Shop = () => {
    // load json data
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // add cart or selected product
    const [item, setItem] = useState([]);
    const addToCart = (product2) => {
        const newItem = [...item, product2];
        const exists = item.find(product => product.id === product2.id);
        if (!exists) {
            setItem(newItem);
        }
        else {
            alert('Item Already Selected');
        }
    };
    // remove items
    const removeItem = () => {
        setItem([]);
    }
    // Choose Random One
    const [selectedItem, setSelectedItem] = useState([]);
    const chooseOne = (items) => {
        if (items.length >= 1) {
            const randomItem = items[Math.floor(Math.random() * items.length)];
            setSelectedItem(randomItem);
        }
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
                    <button
                        className='btn'
                        onClick={() => chooseOne(item)}
                    >Choose One For Me</button><br />
                    <button
                        className='btn'
                        onClick={removeItem}
                    >Remove All</button>
                    <RandomOne randomItem={selectedItem}></RandomOne>
                </div>
            </div>
        </div>
    );
};

export default Shop;