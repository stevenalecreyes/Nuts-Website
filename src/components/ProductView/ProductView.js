import React from 'react';
import './ProductView.css';
import all_product from '../Assets/all_product';
import Item from '../Item/Item';


export default function Products() {

	return(
		<div className='all-products'>
			<h2>All Nuts</h2>
			<hr/>
			<div className="product">
				{all_product.map((product, i)=> {
					return <Item key={i} id={product.id} name={product.name} image={product.image} kgPrice={product.kgPrice} halfkgPrice={product.halfkgPrice}/>
				})}
			</div>
		</div>
		)

}