import React from 'react';
import './RandomOne.css'
const RandomOne = (props) => {
    console.log(props);
    const { randomItem } = props
    return (
        <div className='random'>
            <img className='random-img' src={randomItem.img} alt="" />
            <h2>{randomItem.name}</h2>
        </div>
    );
};

export default RandomOne;