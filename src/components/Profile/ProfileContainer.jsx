import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { setUserProfile } from './../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {profileAPI} from './../../api/api';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId || 2;
		profileAPI.getProfile(userId)
				  .then(data => this.props.setUserProfile(data));
	}

	render() {
		console.log(this.props);
		return (
			<Profile profile={this.props.profile} />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	};
};

const widthDataUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(widthDataUrlProfileContainer);