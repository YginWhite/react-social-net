import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { getProfile, getStatus, changeStatus } from './../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import withAuthRedirect from './../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId || this.props.authId;
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	}

	componentDidUpdate() {
		const profileUserId = this.props.profile ? this.props.profile.userId : 0;
		const authId = this.props.authId;
		const requestedId = this.props.match.params.userId;

		if (authId && profileUserId && !requestedId) {
			if (profileUserId !== authId) {
				this.props.getProfile(authId);
				this.props.getStatus(authId);	
			}
		}
	}

	render() {
		return (
			<Profile profile={this.props.profile}
					 status={this.props.status}
					 changeStatus={this.props.changeStatus} />
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
)(ProfileContainer)