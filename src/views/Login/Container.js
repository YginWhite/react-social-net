import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { login } from '../../redux/authReducer';
import { selectServerErrorText, selectServerFieldErrors } from '../../redux/authReducer';



const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	serverErrorTxt: selectServerErrorText(state),
	fieldErrors: selectServerFieldErrors(state)
});

export default connect(mapStateToProps, { login })(Login);