import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './header.css';

export class Header extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="header">
				<Link to="/" className="logo_link "><h2 className="clickable hover_bottom_anim">SHOPPE</h2></Link>
				<Link to="/shop" className="menu_link "><h4 className="clickable hover_bottom_anim">Shop</h4></Link>
				<Link to="/blog" className="menu_link "><h4 className="clickable hover_bottom_anim">Blog</h4></Link>
				<Link to="/our_story" className="menu_link "><h4 className="clickable hover_bottom_anim">Our Story</h4></Link>
				<hr className="vertical"/>
				<a href="#" className="menu_icon_link"><i className="fa fa-search fa-lg clickable menu_icon_link"></i></a>
				<Link to="/cart" className="menu_icon_link"><i className="fa fa-cart-plus fa-lg clickable"></i></Link>
				<Link to="/account" className="menu_icon_link"><i className="fa fa-user fa-lg clickable"></i></Link>
				<HeaderAfteringHr/>
			</div>
		);
	}
}

function HeaderAfteringHr(){
	//useLocation - hook, hooks can only be ysed in function components, not classes
	let loc = useLocation();
	if(loc.pathname != "/"){
		return(
			<hr className="afteringHr"/>
		);
	} else {
		return null;
	}
}