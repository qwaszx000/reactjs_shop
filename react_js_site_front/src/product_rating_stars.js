import React from 'react';
import ReactDOM from 'react-dom';

import './product_rating_stars.css';

export class ProductRatingStars extends React.Component{
	constructor(props){
		super(props);
		this.state = {full: this.props.full, empty: (this.props.stars - this.props.full)};
	}

	render(){

		const stars = [];

		for(let i=0;i<Number(this.state.full);i++){
			stars.push(<img className="star" id={i} src="/full_star.png" onMouseOver={this.props.onMouseOverStar}/>);
		}

		for(let i=0;i<Number(this.state.empty);i++){
			stars.push(<img className="star" id={this.props.full + i} src="/empty_star.png" onMouseOver={this.props.onMouseOverStar}/>);
		}

		return(
			<div className="rating_stars">
				{stars}
			</div>
		);
	}
}
