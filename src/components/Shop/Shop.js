import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='products-container'>
            <div className="product">
                <img src="" alt="" />
                <h3></h3>
                <p><small>Price:</small>$</p>
                <button>Add To Cart</button>
            </div>
            <div className="cart"></div>
        </div>
    );
};

export default Shop;