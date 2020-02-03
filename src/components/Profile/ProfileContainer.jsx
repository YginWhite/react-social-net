import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import { setUserProfile } from './../../redux/profileReducer';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId || 2;
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			 .then(response => {
			 	this.props.setUserProfile(response.data);
			 });
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