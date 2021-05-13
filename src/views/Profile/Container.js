import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

import { getProfile, getStatus} from '../../redux/profileReducer';
import { selectProfile, selectStatus, selectErrors } from '../../redux/profileReducer';


import withAuthRedirect from '../../custom/withAuthRedirect';
import Profile from './Profile';
import MyPosts from './MyPosts/Container';


class Container extends React.Component {
	getProfileData(id) {
		this.props.getProfile(id);
		this.props.getStatus(id);
	}

	componentDidMount() {
		const { authId } = this.props;
		const userId = this.props.match.params.userId;
		const id = userId || authId;
		this.getProfileData(id);
	}

	componentDidUpdate() {
		const { authId, profile } = this.props;
		const userId = this.props.match.params.userId;
		
		if (profile) {
			const profileId = profile.userId;
			if (!userId && authId !== profileId) {
				this.getProfileData(authId);
			}
		}
	}

	render() {
		const authId = this.props.authId;
		return (
			<div>
				<Profile 
					profile={this.props.profile}
					authId={this.props.authId}
					serverErrors={this.props.serverErrors}
				/>
				{this.props.profile && authId === this.props.profile.userId && 
					<MyPosts/>}
				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		profile: selectProfile(state),
		serverErrors: selectErrors(state),
		authId: state.auth.userId,
		isAuth: state.auth.isAuth
	};
};

export default compose(
	connect(mapStateToProps, { getProfile, getStatus }),
	withRouter,
	withAuthRedirect
)(Container)