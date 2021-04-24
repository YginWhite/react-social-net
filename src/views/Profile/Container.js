import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

import { getProfile, getStatus, changeStatus, addPost } from '../../redux/profileReducer';
import withAuthRedirect from '../../custom/withAuthRedirect';

import Profile from './Profile';
import MyPosts from './MyPosts';



class Container extends React.Component {
	componentDidMount() {
		const { authId } = this.props;

		this.props.getProfile(authId);
		this.props.getStatus(authId);
	}

	render() {
		return (
			<div>
				<Profile 
					profile={this.props.profile}
					status={this.props.status}
					changeStatus={this.props.changeStatus}
				/>
				<MyPosts
					posts={this.props.posts}
					addPost={this.props.addPost}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authId: state.auth.userId,
		isAuth: state.auth.isAuth,
		posts: state.profilePage.posts
	};
};

export default compose(
	connect(mapStateToProps, { getProfile, getStatus, changeStatus, addPost }),
	withRouter,
	withAuthRedirect
)(Container)