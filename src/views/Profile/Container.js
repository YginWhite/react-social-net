import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

import { getProfile, getStatus, addPost, updateProfileData} from '../../redux/profileReducer';
import { selectProfile, selectStatus, selectPosts, selectErrors } from '../../redux/profileReducer';


import withAuthRedirect from '../../custom/withAuthRedirect';
import Profile from './Profile';
import MyPosts from './MyPosts/MyPosts';


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
					status={this.props.status}
					authId={this.props.authId}
					updateProfileData={this.props.updateProfileData}
					serverErrors={this.props.serverErrors}
				/>
				{this.props.profile && authId === this.props.profile.userId && 
					<MyPosts
						posts={this.props.posts}
						addPost={this.props.addPost}
					/>}
				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		profile: selectProfile(state),
		status: selectStatus(state),
		posts: selectPosts(state),
		serverErrors: selectErrors(state),
		authId: state.auth.userId,
		isAuth: state.auth.isAuth
	};
};

export default compose(
	connect(mapStateToProps, { getProfile, getStatus, addPost, updateProfileData }),
	withRouter,
	withAuthRedirect
)(Container)