import React from 'react';
import ReactDOM from 'react-dom';
import {useParams} from 'react-router-dom';

export const UseParamsComponentWrapper = (props) => {
	let params = useParams();
	props.component.props = {params: params};
	console.log(props);

	return(
			<>
				{props.component}
			</>
		);
}