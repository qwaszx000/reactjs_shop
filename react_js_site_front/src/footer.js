import React from 'react';
import './footer.css';

export class Footer extends React.Component{
	render(){
		return (
			<div className="footer">
				<hr/>
				<div className="footer_menu">
					<span className="menusDiv">
						<h4 className="clickable hover_bottom_anim">CONTACT</h4>
						<h4 className="clickable hover_bottom_anim">TERMS OF SERVICE</h4>
						<h4 className="clickable hover_bottom_anim">SHIPPING AND RETURNS</h4>
					</span>
					<span className="inputDiv">
						<input type="text" placeholder="Give an email, get the newsletter"/>
						<i className="fa fa-long-arrow-right fa-lg"></i>
					</span>
				</div>
				<div className="footer_about">
					<span className="text_black"><i className="fa fa-copyright"></i> 2021 Shelly. <a href="#">Terms of use</a> and <a href="#">privacy policy.</a></span>
					<i className="fa fa-linkedin fa-lg clickable"></i>
					<i className="fa fa-facebook fa-lg clickable"></i>
					<i className="fa fa-linux fa-lg clickable"></i>
					<i className="fa fa-github fa-lg clickable"></i>
				</div>
			</div>
		);
	}
}
