import React from 'react';
import { connect } from 'react-redux';
import HeaderMenu from './HeaderMenu';
import { logout } from '../../redux/authReducer';

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { logout })(HeaderMenu);