import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { product, addToCart } = props;
    return (
        <div className='single-product'>
            <img className='product-image' src={product.img} alt="" />
            <div className='product-details'>
                <h3>{product.name}</h3>
                <p><small>Price: </small>{product.price}</p>
            </div>
            <button className='cart-btn' onClick={() => { addToCart(product) }}>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;