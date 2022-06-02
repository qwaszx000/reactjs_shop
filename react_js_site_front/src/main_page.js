import React from 'react';

import {Slider} from './slider.js';
import {ShopGrid, ShopSearchGrid} from './shops.js';
import './main_page.css';


export class MainPageContent extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			slider_products: [{
				img: "index_slider_image.png",
				link: "product1",
				text: "Gold Big Hoops",
				cost_text: "100$"
			},
			{
				img: "earring1.png",
				link: "product2",
				text: "product2_name",
				cost_text: "50$"
			}
		],
		shop_products: []};
	}

	render(){
		return (
			<div className="content">
				<div className="slider_container">
					<Slider products={this.state.slider_products} />
				</div>
				<div className="shop_latest">
					<div className="shop_latest_header">
						<h2>Shop The Latest</h2>
						<a href="#">View all</a>
					</div>
					<ShopGrid/>
				</div>
			</div>
		)
	}
}