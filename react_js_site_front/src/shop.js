import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

import {ShopSearchMenu} from './shop_search_menu.js';
import {ShopSearchGrid} from './shops.js';
import {ProductsStateStore} from './mobx_stateshop.js';
import './shop.css';

export class ShopMain extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="content_shop">
				<h2 className="title">Shop The Latest</h2>
				<div class="shop_search_sidebar">
					<ShopSearchMenu/>
					<button onClick={this.letsTry}>Remove</button>
				</div>
				<div class="shop_search_results">
					<ShopSearchGrid/>
				</div>
			</div>
		);
	}

	letsTry(){
		ProductsStateStore.getStateStore().removeProduct(0);
	}
}
