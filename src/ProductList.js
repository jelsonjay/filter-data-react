import React from 'react';
import SingleProduct from './SingleProduct';

const ProductList = (props) => {
	return (
		<>
			<h1 className="txt">
				Most Popular JavaScript Frameworks & Libraries for Web Development
			</h1>
			<div className="btn">
				{/*
				<button value="All" onClick={props.handleBtn}>
					All
				</button>
				<button value="javascript" onClick={props.handleBtn}>
					JavaScript
				</button>
				<button value="react" onClick={props.handleBtn}>
					React.js
				</button>
				<button value="vue" onClick={props.handleBtn}>
					Vue.js
				</button>
				<button value="gatsby" onClick={props.handleBtn}>
					Gatsby.js
				</button>
              */}

				{/*This is in Dynamic*/}
				{props.btn.map((btn, index) => {
					return (
						<button key={index} value={btn} onClick={props.handleBtn}>
							{btn}
						</button>
					);
				})}
			</div>
			<div className="product">
				{props.products.map((item) => {
					return <SingleProduct key={item.id} item={item} />;
				})}
			</div>
		</>
	);
};

export default ProductList;
