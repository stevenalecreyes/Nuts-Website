import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';


export default function Popular() {

	return(
		<div className='popular'>
			<h2>Popular Nuts</h2>
			<hr/>
			<div className="popular-item">
				{data_product.map((item, i)=> {
					return <Item key={i} id={item.id} name={item.name} image={item.image} kgPrice={item.kgPrice} halfkgPrice={item.halfkgPrice}/>
				})}
			</div>
		</div>
		)

}