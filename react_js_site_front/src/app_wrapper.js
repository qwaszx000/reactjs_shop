import React from 'react';
import ReactDOM from 'react-dom';
import {Outlet} from 'react-router-dom';


import {Header} from './header.js';
import {Footer} from './footer.js';

export class AppWrapper extends React.Component{
	render(){
		return (
			<center className="root">
				<Header/>
				<Outlet/>
				<Footer/>
			</center>
		);
	}
}