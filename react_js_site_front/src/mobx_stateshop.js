import {makeAutoObservable, makeObservable, observable, computed, action, flow, autorun} from 'mobx';

class MobxProductsStateStore{
	_products = [];
	constructor(){
		makeObservable(this, {
			_products: observable,
			products: computed,
			removeProduct: action,
			loadProducts: flow,
		});
		//makeAutoObservable(this);
		//autorun(() => {console.log(this._products);});
		this.loadProducts();
	}

	get products(){
		return this._products;
	}

	removeProduct(id){
		this._products = this._products.filter((el, element_id) => {
			if(element_id != id){
				return el;
			}
		});
	}

	//https://mobx.js.org/actions.html#using-flow-instead-of-async--await-
	*loadProducts(){
		let tmp_products = [];
		for(let i = 1; i<=6; i++){
			tmp_products.push({
				img: "earring" + i + ".png",
				name: "Earring " + i,
				text: "Text Earring " + i,
				cost_text: "100$"
			});
		}
		this._products = tmp_products;
	}
}

export class ProductsStateStore{
	static state_store = null;

	static getStateStore(){
		if(ProductsStateStore.state_store){
			return ProductsStateStore.state_store;
		} else {
			ProductsStateStore.state_store = new MobxProductsStateStore();
			return ProductsStateStore.state_store;
		}
	}

	static stateStoreProductsToNormal(store_products){
		let products = [];
		store_products.map((el) => {
			products.push(el);
		});
		return products;
	}
}