import React from 'react';
import {connect} from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	};
}

const withAuthRedirect = (Component) => {
	let RedirectComponent = (props) => {

		// if (!props.isAuth) return <Redirect to='/login' />
		// return <Component {...props} />

		if (!props.isAuth) return <Redirect to={{
    			pathname: "/login",
    			state: { referrer: props.match.url }
  			}}
		 />
		return <Component {...props} />
	};

	//RedirectComponent = connect(mapStateToProps, {})(RedirectComponent);

	RedirectComponent = compose(
		connect(mapStateToProps, {}),
		withRouter
	)(RedirectComponent);

	return RedirectComponent;
};

export default withAuthRedirect;