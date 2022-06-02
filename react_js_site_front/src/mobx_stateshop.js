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
				cost_text: "100$",
				reviews: [
					{name: "Person1", stars: 4, date_str: "7 May, 2020", text: "Review text 1"},
					{name: "Person2", stars: 3, date_str: "6 May, 2020", text: "Review text 2"}
				]
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
}