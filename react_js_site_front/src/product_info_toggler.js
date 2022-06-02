import React from 'react';
import ReactDOM from 'react-dom';

import './product_info_toggler.css';

export class ProductInfoToggler extends React.Component{
	constructor(props){
		super(props);

		let children_arr = Array.from(this.props.children);
		let headers_arr = Array.from(this.props.headers);

		this.state = {
			children: children_arr,
			headers: headers_arr,
			children_count: Math.min(children_arr.length, headers_arr.length), //minimal count, so we cannot go beyond bounds
			current_tab_index: 0,
			body_height: "10px"
		};

		this.onHeaderElementClick = this.onHeaderElementClick.bind(this);
		this.body_ref = React.createRef();
	}

	render(){
		let header_elems = [];
		let children_elems = [];
		for(let i=0;i<this.state.children_count;i++){
			header_elems.push(<h4 className={i==this.state.current_tab_index ? "active" : ""} id={i} onClick={this.onHeaderElementClick}>{this.state.headers[i]}</h4>);
			children_elems.push(<div className={i==this.state.current_tab_index ? "active" : ""} id={i}>{this.state.children[i]}</div>);
		}

		let body_style_vars = {
			"--body_height": this.state.body_height
		};


		return(
			<div className="product_info_toggler">
				<div className="toggler_header">{header_elems}<hr/></div>
				<div className="toggler_body" ref={this.body_ref} style={body_style_vars}>{children_elems}</div>
			</div>
		);
	}

	//change selected element and manually set body height(elements positioned absolutely, so they dont set parent's height)
	onHeaderElementClick(event){
		let body_elem = document.querySelector(".product_info_toggler>.toggler_body>div[id='" + event.target.id + "']");
		this.setState({current_tab_index: Number(event.target.id), body_height: (body_elem.offsetHeight+"px")});
	}
}