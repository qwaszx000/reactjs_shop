import React from 'react';

import {DoubleRangeInput} from './double_range_input.js';
import './shop_search_menu.css';


export class ShopSearchMenu extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			shop_by: "",
			//shop_by_index: 0,
			sort_by: "",
			//sort_by_index: 0,
			on_sale: false,
			in_stock: false
		};

		this.togglerOnToggle = this.togglerOnToggle.bind(this);
		this.selectorsOnChange = this.selectorsOnChange.bind(this);
	}
	render(){
		return (
			<div className="shop_search_menu">
				<div className="textsearch_input_container">
					<input type="text" className="textsearch_input" placeholder="Search..."/>
					<i className="fa fa-search fa-lg"></i>
				</div>
				<div className="shop_by_selector_container">
					<select name="shop_by" onChange={this.selectorsOnChange}>
						<option value="">Shop By</option>
						<option value="option2">Shop By2</option>
					</select>
					<div className="select_appearence"></div>
				</div>
				<div className="sort_by_selector_container">
					<select name="sort_by" onChange={this.selectorsOnChange}>
						<option value="">Sort By</option>
					</select>
					<div className="select_appearence"></div>
				</div>
				<div className="cost_range_slider_container">
					<DoubleRangeInput min={0} max={10} step={1}/>
				</div>
				<div className="toggler_container">
					<label>On Sale</label><div className={this.state.on_sale ? "toggler enabled" : "toggler"} name="on_sale" onClick={this.togglerOnToggle}><div className="toggler_dot"></div></div>
				</div>
				<div className="toggler_container">
					<label>In Stock</label><div className={this.state.in_stock ? "toggler enabled" : "toggler"} name="in_stock" onClick={this.togglerOnToggle}><div className="toggler_dot"></div></div>
				</div>
			</div>
		)
	}

	togglerOnToggle(event){
		let tmp_state_change = {};
		tmp_state_change[event.target.attributes.name.value] = !this.state[event.target.attributes.name.value];
		this.setState(tmp_state_change);
	}

	selectorsOnChange(event){
		let tmp_state_change = {};
		tmp_state_change[event.target.attributes.name.value] = event.target.value;
		//tmp_state_change[event.target.attributes.name.value + "_index"] = event.target.selectedIndex;
		this.setState(tmp_state_change);
	}
}