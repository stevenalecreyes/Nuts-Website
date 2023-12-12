import React from 'react';
import './Item.css';

export default function Item(props) {

    return (
        <div className='item'>
            <img src={props.image} alt="" height='350'/>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-kg'>
                    P{props.kgPrice}
                </div>
                <div className='item-price-halfkg'>
                    P{props.halfkgPrice}
                </div>
            </div>
        </div>
    );
};


