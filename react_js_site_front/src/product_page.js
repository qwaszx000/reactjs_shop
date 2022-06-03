import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {UseParamsComponentWrapper} from './useparams_component_wrapper.js';
import {ProductsStateStore} from './mobx_stateshop.js';

import {ProductImagesDisplayer} from './product_images_displayer.js';
import {ProductRatingStars} from './product_rating_stars.js';
import {ProductInfoToggler} from './product_info_toggler.js';
import {ProductReviewsTab} from './product_reviews_tab.js';
import {SimilarProducts} from './similar_products.js';

import './product_page.css';


export const ProductPageWrapped = () => {
	return(
			<UseParamsComponentWrapper component={<ProductPage/>}/>
		);
}

class ProductPage extends React.Component{
	constructor(props){
		super(props);

		this.state = {product_counter_value: 1, recently_added_to_cart: false};

		this.onMinusClick = this.onMinusClick.bind(this);
		this.onPlusClick = this.onPlusClick.bind(this);
		this.onAddToCart = this.onAddToCart.bind(this);
	}

	render(){
		return(
			<div className="product_page">
				{this.state.recently_added_to_cart && (
					<div className="added_to_cart_message">
						<div className="ok_icon">
							<div></div>
						</div>
						<label>The item added to your Shopping bag.</label>
						<Link to="/cart" className="cart_link">VIEW CART</Link>
					</div>)
				}
				<div className="image_displayer_container">
					<ProductImagesDisplayer images={[ProductsStateStore.getStateStore().products[this.props.params.product_id].img]}/>
				</div>
				<div className="info_controls_container">
					<h2 className="name">{ProductsStateStore.getStateStore().products[this.props.params.product_id].name}</h2>
					<h4 className="cost">{ProductsStateStore.getStateStore().products[this.props.params.product_id].cost_text}</h4>
					<div className="rating">
						<ProductRatingStars stars={5} full={4} onMouseOverStar={this.onStarHover}/>
						<label>1 customer review</label>
					</div>
					<p className="descr">{ProductsStateStore.getStateStore().products[this.props.params.product_id].text}</p>
					<div className="add_to_cart_container">
						<div className="product_count_selector">
							<span className="minus" onClick={this.onMinusClick}><label>-</label></span>
							<span className="value"><label>{this.state.product_counter_value}</label></span>
							<span className="plus" onClick={this.onPlusClick}><label>+</label></span>
						</div>
						<button onClick={this.onAddToCart}>ADD TO CART</button>
					</div>
					<div className="like_and_contact">
						<i className="fa fa-heart-o fa-lg"></i>
						<hr className="vertical_line"/>
						<i className="fa fa-envelope-o fa-lg"></i>
						<i className="fa fa-facebook fa-lg"></i>
						<i className="fa fa-instagram fa-lg"></i>
					</div>
					<h4 className="sku_value">SKU:<label>12</label></h4>
					<h4 className="categories">Categories:<label>Fashion, Style</label></h4>
				</div>
				<div className="additional_container">
					<ProductInfoToggler headers={["Description", "Additional information", "Reviews(" + ProductsStateStore.getStateStore().products[this.props.params.product_id].reviews.length + ")"]}>
						<div className="description_info_tab">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
						</div>
						<div className="additional_info_tab">
							<p><h4>Weight:</h4><label>0.3kg</label></p>
							<p><h4>Colours:</h4><label>Black, White, Brown</label></p>
							<p><h4>Material:</h4><label>Metal</label></p>
						</div>
						<div className="reviews_tab">
							<ProductReviewsTab product_id={this.props.params.product_id}/>
						</div>
					</ProductInfoToggler>
				</div>
				<div className="similar_items_part">
					<h3>Similar Items</h3>
					<SimilarProducts product_id={this.props.params.product_id}/>
				</div>
			</div>
		);
	}

	onStarHover(event){

	}

	//https://reactjs.org/docs/state-and-lifecycle.html
	onMinusClick(event){
		this.setState((state) => {
			return {product_counter_value: state.product_counter_value - 1};
		});
	}
	onPlusClick(event){
		this.setState((state) => {
			return {product_counter_value: state.product_counter_value + 1};
		});
	}

	onAddToCart(event){
		this.setState({
			recently_added_to_cart: true
		});
	}

}