/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import {Provider} from 'react-redux';

import store from 'redux/reduxStore';

import App from 'App';

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

function render() {
	ReactDOM.render(
		<Provider store={store}>
		  <Router history={hist}>
		  	<App/>
		  </Router>
		</Provider>,
	  document.getElementById("root")
	);
}

render();
store.subscribe(render);


