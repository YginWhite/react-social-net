import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux';

import Admin from "layouts/Admin.js";
import Preloader from 'custom/Preloader/Preloader';

import { initializeApp } from 'redux/appReducer';

class App extends React.Component {
	componentDidMount() {
		//this.props.initializeApp();
	}

	render() {
		// if (!this.props.isInitialized) {
		// 	return <div className="container"><Preloader /></div>;
		// }

		return (
			<Switch>
			  <Route path="/" component={Admin} />
			  <Redirect from="/" to="/dashboard" />
			</Switch>
		);
	}
}

const mapStateToProps = (state) => ({
	isInitialized: state.app.isInitialized
});

export default compose(
	// withRouter,
	connect(mapStateToProps, { initializeApp })
)(App)