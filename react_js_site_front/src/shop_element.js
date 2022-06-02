import React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';
import './shop_element.css';


export const ShopElement = observer(class ShopElement extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="shop_element">
				<Link to={"/product/"+this.props.index}>
					<img src={this.props.info.img}/>
					<h4 className="name">{this.props.info.name}</h4>
					<h4 className="cost_text">{this.props.info.cost_text}</h4>
				</Link>
				<div className="action_icons">
					<i className="fa fa-cart-plus fa-lg clickable"></i>
					<i className="fa fa-eye fa-lg clickable"></i>
					<i className="fa fa-heart-o fa-lg clickable"></i>
				</div>
			</div>
		)
	}
});

export const ShopSearchElement = observer(class ShopSearchElement extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="shop_search_element">
				<Link to={"/product/"+this.props.index}>
					<img src={this.props.info.img}/>
					<h4 className="name">{this.props.info.name}</h4>
					<h4 className="cost_text">{this.props.info.cost_text}</h4>
				</Link>
				<div className="action_icons">
					<i className="fa fa-cart-plus fa-lg clickable"></i>
					<i className="fa fa-eye fa-lg clickable"></i>
					<i className="fa fa-heart-o fa-lg clickable"></i>
				</div>
			</div>
		)
	}
});