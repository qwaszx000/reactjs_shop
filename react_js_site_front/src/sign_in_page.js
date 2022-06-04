import React from 'react';

import './sign_in_page.css';

export class SignInPage extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			remember_me_checked: false
		};

		this.toggleRememberMe = this.toggleRememberMe.bind(this);
	}

	render(){
		return(
			<div className="sign_in_main">
				<h2>My account</h2>
				<div className="signin_register_toggler">
					<span className="active"><a href="#">Sign in</a></span>
					<span><a href="#">Register</a></span>
				</div>
				<div className="sign_in_form">
					<input type="text" placeholder="Email"/>
					<input type="text" placeholder="Password"/>
					<div className="checkbox_container" onClick={this.toggleRememberMe}>
						<input type="checkbox"/>
						<label>Remember me</label>
						<div className={this.state.remember_me_checked ? "checkbox_icon checked" : "checkbox_icon"}></div>
					</div>
					<button>SIGN IN</button>
					<a href="#">Have you forgotten your password?</a>
				</div>
			</div>
		);
	}

	toggleRememberMe(event){
		this.setState( (state, props) => ({
			remember_me_checked: !state.remember_me_checked
		}) );
		console.log(this.state);
	}
}