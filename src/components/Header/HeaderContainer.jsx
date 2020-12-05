import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import { logout } from './../../redux/authReducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		//this.props.getAuthUserData();
	}

	render() {
		return (
			<Header isAuth={this.props.isAuth} 
					login={this.props.login}
					logout={this.props.logout} />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.auth.login,
		isAuth: state.auth.isAuth
	};
};

export default connect(mapStateToProps, { logout })(HeaderContainer);