import React from 'react';
import ReactDOM from 'react-dom';

import {ProductsStateStore} from './mobx_stateshop.js';
import {ProductReviewsListing} from './product_reviews_listing.js';
import {ProductReviewForm} from './product_review_form.js';
import './product_reviews_tab.css';

export class ProductReviewsTab extends React.Component{
	constructor(props){
		super(props);

		this.state = {reviews: ProductsStateStore.getStateStore().products[this.props.product_id].reviews,
			product_name: ProductsStateStore.getStateStore().products[this.props.product_id].name};
	}

	render(){
		return(
			<div className="reviews_tab_container">
				<ProductReviewsListing reviews={this.state.reviews} product_name={this.state.product_name}/>
				<ProductReviewForm/>
			</div>
		);
	}

}