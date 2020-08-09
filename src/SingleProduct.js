import React from 'react';

function SingleProduct(props) {
	return (
		<div className="grid">
			<img className="group-image" src={props.item.image} alt="Avatar" />
			<h1>{props.item.title}</h1>
			<p>{props.item.story}</p>
		</div>
	);
}

export default SingleProduct;
