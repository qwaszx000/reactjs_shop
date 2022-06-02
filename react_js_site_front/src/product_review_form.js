import React from 'react';
import ReactDOM from 'react-dom';

import {ProductsStateStore} from './mobx_stateshop.js';
import {ProductRatingStars} from './product_rating_stars.js';
import './product_review_form.css';

export class ProductReviewForm extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			save_info_checkbox: false,
			full_stars: 0
		};

		this.onStarClick = this.onStarClick.bind(this);
		this.onMouseOverStar = this.onMouseOverStar.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.saveInfoCheckboxToggle = this.saveInfoCheckboxToggle.bind(this);
	}

	render(){
		return(
			<span className="product_review_form">
				<h3>Add a Review</h3>
				<label>Your email address will not be published. Required fields are marked *</label>
				<div className="textarea_input">
					<textarea id="" cols="30" rows="10" placeholder="Your Review*"></textarea>
				</div>
				<div className="text_input">
					<input type="text" placeholder="Enter your name*"/>
				</div>
				<div className="text_input">
					<input type="text" placeholder="Enter your Email*"/>
				</div>
				<div className="save_info_checkbox">
					<input type="checkbox" className={this.state.save_info_checkbox ? "checked" : ""} onClick={this.saveInfoCheckboxToggle}/>
					<label>Save my name, email, and website in this browser for the next time I comment</label>
				</div>
				<div className="stars_rating_input">
					<label>Your Rating*</label>
					<ProductRatingStars full={this.state.full_stars} stars={5} onStarClick={this.onStarClick} onMouseOverStar={this.onMouseOverStar}/>
				</div>
				<button className="submit_btn" onClick={this.onSubmit}>Submit</button>
			</span>
		);
	}

	saveInfoCheckboxToggle(event){
		this.setState((state) => {
			state.save_info_checkbox = !state.save_info_checkbox;
			return state;
		});
	}

	onStarClick(event){
		this.setState({
			full_stars: Number(event.target.id)+1
		});
	}

	onMouseOverStar(event){
		console.log(event);
	}

	onSubmit(event){
		console.log(event);
	}


}