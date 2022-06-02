import React from 'react';
import './slider.css';

export class Slider extends React.Component{
	constructor(props){
		super(props);
		this.state = {products: props.products, active_slide: 0};
	}
	render(){
		return (
			<div className="slider">
				<div className="slider_elements">
					{this.state.products.map((el, index) => (
						<div className={index==this.state.active_slide ? 'slider_element active' : 'slider_element'}>
							<img src={el.img}/>
							<h2>{el.text}</h2>
							<h3>{el.cost_text}</h3>
							<button>View Product</button>
						</div>
					))}
				</div>
				<div className="slider_navs">
					{this.state.products.map((el, index) => (
						<div className={index==this.state.active_slide ? 'slider_nav active' : 'slider_nav'} onClick={() => {
							this.setState({active_slide: index});
						}}>
						</div>
					))}
				</div>
			</div>
		)
	}
}