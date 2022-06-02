import React from 'react';
import ReactDOM from 'react-dom';

import './product_rating_stars.css';

export class ProductRatingStars extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		let full_stars = Number(this.props.full);
		let empty_stars = Number(this.props.stars) - full_stars;

		const stars = [];

		for(let i=0;i<full_stars;i++){
			stars.push(<img className="star" id={i} src="/full_star.png" onMouseOver={this.props.onMouseOverStar} onClick={this.props.onStarClick}/>);
		}

		for(let i=0;i<empty_stars;i++){
			stars.push(<img className="star" id={full_stars + i} src="/empty_star.png" onMouseOver={this.props.onMouseOverStar} onClick={this.props.onStarClick}/>);
		}

		return(
			<div className="rating_stars">
				{stars}
			</div>
		);
	}
}
