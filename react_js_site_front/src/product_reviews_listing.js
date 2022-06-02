import React from 'react';
import ReactDOM from 'react-dom';

import {ProductsStateStore} from './mobx_stateshop.js';
import {ProductReviewDisplay} from './product_review_display.js';
import './product_reviews_listing.css';

export class ProductReviewsListing extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<span className="product_reviews">
				<h3>{this.props.reviews.length} Reviews for {this.props.product_name}</h3>
				<div className="reviews_list">
					{this.props.reviews.map((el, index) => (
						<ProductReviewDisplay review={el} is_last={index+1==this.props.reviews.length}/>
					))}
				</div>
			</span>
		);
	}

}