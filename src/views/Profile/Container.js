import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

import { getProfile, getStatus, changeStatus } from '../../redux/profileReducer';
import withAuthRedirect from '../../custom/withAuthRedirect';

import Profile from './Profile';
import MyPosts from './MyPosts';



class Container extends React.Component {
	componentDidMount() {
		//this.props.getProfile(5854);
		//this.props.getStatus(5854);
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<Profile/>
				<MyPosts/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authId: state.auth.userId,
		isAuth: state.auth.isAuth
	};
};

export default compose(
	connect(mapStateToProps, { getProfile, getStatus, changeStatus }),
	withRouter,
	withAuthRedirect
)(Container)