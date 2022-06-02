import React from 'react';
import ReactDOM from 'react-dom';

import {ProductsStateStore} from './mobx_stateshop.js';
import {ShopSimilarGrid} from './shops.js';
import './similar_products.css';

export class SimilarProducts extends React.Component{
	constructor(props){
		super(props);

		this.state = {products: []};
		let all_products = ProductsStateStore.getStateStore().products;

		//Some magick to pick near elements
		//not good, yeah
		if(this.props.product_id + 2 < all_products.length){
			this.state.products.push(all_products[this.props.product_id + 2]);
		} else if(this.props.product_id - 2 >= 0){
			this.state.products.push(all_products[this.props.product_id - 2]);
		}
		if(this.props.product_id + 1 < all_products.length){
			this.state.products.push(all_products[this.props.product_id + 1]);
		} else if(this.props.product_id - 3 >= 0){
			this.state.products.push(all_products[this.props.product_id - 3]);
		}
		if(this.props.product_id - 1 >= 0){
			this.state.products.push(all_products[this.props.product_id - 1]);
		} else if(this.props.product_id + 3 >= 0){
			this.state.products.push(all_products[this.props.product_id + 3]);
		}
	}

	render(){
		return(
			<div className="similar_container">
				<ShopSimilarGrid products={this.state.products}/>
			</div>
		);
	}

}