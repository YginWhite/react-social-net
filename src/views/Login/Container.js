import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { login } from '../../redux/authReducer';


const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	serverError: state.auth.serverError
});

export default connect(mapStateToProps, { login })(Login);