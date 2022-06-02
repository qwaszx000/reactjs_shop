import React from 'react';
import ReactDOM from 'react-dom';

import './product_images_displayer.css';

export class ProductImagesDisplayer extends React.Component{
	constructor(props){
		super(props);

		this.showFullscreanImg = this.showFullscreanImg.bind(this);
		this.hideFullscreanImg = this.hideFullscreanImg.bind(this);

		this.body_shadower_ref = React.createRef();
		this.fullscreen_img_el = null;
	}
	render(){
		return(
			<div className="product_images_displayer">
				<div className="additional_images_container">
					<img src={"/" + this.props.images[0]} onClick={this.showFullscreanImg}/>
					<img src={"/" + this.props.images[0]} onClick={this.showFullscreanImg}/>
					<img src={"/" + this.props.images[0]} onClick={this.showFullscreanImg}/>
					<img src={"/" + this.props.images[0]} onClick={this.showFullscreanImg}/>
				</div>
				<div className="main_image_container">
					<img src={"/" + this.props.images[0]} onClick={this.showFullscreanImg}/>
					<div className="lines_container">
						<hr className="grey_line"/>
						<hr className="black_line"/>
					</div>
				</div>
				<div className="body_shadower" onClick={this.hideFullscreanImg} ref={this.body_shadower_ref}></div>
			</div>
		);
	}

	showFullscreanImg(event){
		this.fullscreen_img_el = event.target;

		this.fullscreen_img_el.style.setProperty('--width_natural', this.fullscreen_img_el.naturalWidth);
		this.fullscreen_img_el.style.setProperty('--height_natural', this.fullscreen_img_el.naturalHeight);

		this.fullscreen_img_el.classList.add("fullscreen");
		this.body_shadower_ref.current.classList.add("active");
	}

	hideFullscreanImg(event){
		this.fullscreen_img_el.classList.remove("fullscreen");
		this.body_shadower_ref.current.classList.remove("active");
	}
}