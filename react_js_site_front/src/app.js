import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {AppWrapper} from './app_wrapper.js';
import {ShopMain} from './shop.js';
import {MainPageContent} from './main_page.js';
import {ProductPageWrapped} from './product_page.js';
import {ContactFormPage} from './contact_form_page.js';
import {SignInPage} from './sign_in_page.js';
import './styles.css';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppWrapper/>}>
					<Route index element={<MainPageContent/>}/>
					<Route path="shop" element={<ShopMain/>}/>
					<Route path="product/:product_id" element={<ProductPageWrapped/>}/>
					<Route path="contact" element={<ContactFormPage/>}/>
					<Route path="sign-in" element={<SignInPage/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

ReactDOM.render(<App/>, document.body);
//ReactDOM.render(<App/>, document.getElementById("root"));