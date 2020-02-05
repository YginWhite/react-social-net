import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import { setUserAuthData } from './../../redux/authReducer';
import {authAPI} from './../../api/api';

class HeaderContainer extends React.Component {
	componentDidMount() {
		authAPI.authMe()
			   .then(data => {
			    	let {id, email, login} = data.data;
			    	if (data.resultCode === 0) {
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