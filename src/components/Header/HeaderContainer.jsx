import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {connect} from 'react-redux';
import { setUserAuthData } from './../../redux/authReducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			 .then(response => {
			 	console.log(response.data);
			 	let {id, email, login} = response.data.data;
			 	if (response.data.resultCode === 0) {
			 		this.props.setUserAuthData(id, email, login);
			 	}
			 });
	}

	render() {
		return (
			<Header isAuth={this.props.isAuth} 
					login={this.props.login} />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.auth.login,
		isAuth: state.auth.isAuth
	};
};

export default connect(mapStateToProps, { setUserAuthData })(HeaderContainer);