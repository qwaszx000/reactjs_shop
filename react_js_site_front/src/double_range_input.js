import React from 'react';
import './double_range_input.css';

export class DoubleRangeInput extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			min: props.min,
			max: props.max,
			step: props.step,
			value1: 0,
			value2: props.max
		};

		this.onRangeInputsChange = this.onRangeInputsChange.bind(this);
	}
	render(){
		let selected_range_styles_vars = {
			"--range_left_offset": this.state.value1/this.state.max*100 + "%", 
			"--range_len": (this.state.value2 - this.state.value1)/this.state.max*100 + "%"
		};
		return (
			<div className="double_range_input_container">
				<div className="double_range_input">
					<input type="range" name="range_value1" min={this.state.min} max={this.state.max} step={this.state.step} value={this.state.value1} onChange={this.onRangeInputsChange}/>
					<input type="range" name="range_value2" min={this.state.min} max={this.state.max} step={this.state.step} value={this.state.value2} onChange={this.onRangeInputsChange}/>
					<div className="track_display"></div>
					<div className="selected_range_display" style={selected_range_styles_vars}></div>
				</div>
				<span className="price_output">Price: ${this.state.value1 + " - $" + this.state.value2}</span>
				<span className="filter clickable">Filter</span>
			</div>
		)
	}

	onRangeInputsChange(event){
		let new_state = {value1: Number(this.state.value1), value2: Number(this.state.value2)};

		//moving left thumb
		if(event.target.name == "range_value1"){
			new_state['value1'] = Number(event.target.value);

			//left thumb cannot be more then or equal to right thumb
			//if can - move right thumb
			//else - dont allow left thumb to move
			if(new_state['value1'] >= new_state['value2'] && new_state['value1'] < this.state.max){
				new_state['value2'] = new_state['value1'] + 1;
			} else if(new_state['value1'] >= new_state['value2'] && new_state['value1'] >= this.state.max){
				new_state['value1'] = new_state['value2'] - 1;
			}

		//moving right thumb
		} else if(event.target.name == "range_value2"){
			new_state['value2'] = Number(event.target.value);

			//right thumb cannot be less then or equal to left thumb
			//if can - move left thumb
			//else - dont allow right thumb to move
			if(new_state['value2'] <= new_state['value1'] && new_state['value2'] > this.state.min){
				new_state['value1'] = new_state['value2'] - 1;
			} else if(new_state['value2'] <= new_state['value1'] && new_state['value2'] <= this.state.min){
				new_state['value2'] = new_state['value1'] + 1;
			}

		}

		this.setState(new_state);
	}
}