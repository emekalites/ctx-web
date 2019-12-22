import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/slick.css';
import './assets/css/slick-theme.css';
import './assets/css/jquery.fancybox.css';
import './assets/css/animate.min.css';
import './assets/css/style.css';
import './assets/css/colors/green/color.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
