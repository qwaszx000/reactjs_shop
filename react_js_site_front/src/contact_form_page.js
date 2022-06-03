import React from 'react';
import ReactDOM from 'react-dom';

import {UseParamsComponentWrapper} from './useparams_component_wrapper.js';
import {ProductsStateStore} from './mobx_stateshop.js';

import './contact_form_page.css';

export class ContactFormPage extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="contact_form">
				<h2>Contact Us</h2>
				<center><h4>Say Hello send us your thoughts about our products or share your ideas with our Team!</h4></center>
				<span className="col">
					<input type="text" className="text_input" placeholder="First name"/>
					<input type="text" className="text_input" placeholder="Email"/>
				</span>
				<span className="col">
					<input type="text" className="text_input" placeholder="Last name"/>
					<div className="input_select_container">
						<select className="input_select">
							<option selected className="default_select_option">Subject</option>
							<option>Shipping</option>
							<option>Work</option>
							<option>Site</option>
							<option>Other</option>
						</select>
						<div className="select_input_icon"></div>
					</div>
				</span>
				<textarea placeholder="Message"></textarea>
				<button>SEND</button>
			</div>
		)
	}
}