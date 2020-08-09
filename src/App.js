import { data } from './data';
import './App.css';
import React, { Component } from 'react';
import ProductList from './ProductList';

class App extends Component {
	state = {
		products: data,
		//productcopy: [],
		productcopy: data,
		btn: ['All', 'React', 'Javascript', 'Vue', 'Gatsby']
	};

	// Filtering button goes here
	handleBtn = (event) => {
		console.log(event.target.value);
		let productcopy;
		if (event.target.value === 'All') {
			productcopy = this.state.products;
		} else {
			productcopy = this.state.products.filter(
				(item) => item.title === event.target.value
			);
		}

		this.setState({
			productcopy: productcopy
		});
	};

	render() {
		return (
			<div className="App">
				<ProductList
					products={this.state.productcopy}
					handleBtn={this.handleBtn}
					btn={this.state.btn}
				/>
			</div>
		);
	}
}

export default App;
