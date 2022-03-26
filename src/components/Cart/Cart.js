import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
const Cart = (props) => {
    const { item } = props;
    // let name = '';
    // let image = '';
    // for (const product of item) {
    //     name = product.name;
    //     image = product.img;
    // };
    return (
        <div className='cart'>
            {
                item.map(itm => <div
                    key={itm.id}
                    className='cart-add'>
                    <img className='cart-img' src={itm.img} alt="" />
                    <h5>{itm.name}</h5>
                    <p className='delete-icon'><FontAwesomeIcon icon={faTrashCan} ></FontAwesomeIcon></p>
                </div>)
            }
        </div>
    );
};

export default Cart;