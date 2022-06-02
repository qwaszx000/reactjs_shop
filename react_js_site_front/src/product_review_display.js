import React from 'react';
import ReactDOM from 'react-dom';

import {ProductsStateStore} from './mobx_stateshop.js';
import {ProductRatingStars} from './product_rating_stars.js';
import './product_review_display.css';

export class ProductReviewDisplay extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="review_display">
				<div className="heading"><h3>{this.props.review.name}</h3><label>{this.props.review.date_str}</label></div>
				<div className="stars">
					<ProductRatingStars full={this.props.review.stars} stars={5}/>
				</div>
				<p>{this.props.review.text}</p>
				{this.props.is_last || 
					<hr/>
				}
			</div>
		);
	}

}