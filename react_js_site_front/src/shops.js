import React from 'react';
import {observer} from 'mobx-react';

import {ProductsStateStore} from './mobx_stateshop.js';
import {ShopElement, ShopSearchElement, ShopSimilarElement} from './shop_element.js';


export const ShopGrid = observer(class ShopGrid extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="shop_elements">
				{ProductsStateStore.getStateStore().products.map((el,index) => (
					<ShopElement info={el} index={index}/>
				))}
			</div>
		)
	}
});

export const ShopSearchGrid = observer(class ShopSearchGrid extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="shop_search_elements">
				{ProductsStateStore.getStateStore().products.map((el, index) => (
					<ShopSearchElement info={el} index={index}/>
				))}
			</div>
		)
	}
});

export const ShopSimilarGrid = observer(class ShopSimilarGrid extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="shop_similar_elements">
				{this.props.products.map((el, index) => (
					<ShopSimilarElement info={el} index={index}/>
				))}
			</div>
		)
	}
});

