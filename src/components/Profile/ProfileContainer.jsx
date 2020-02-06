import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { getProfile } from './../../redux/profileReducer';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId || 2;
		this.props.getProfile(userId);
	}

	render() {
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

export default connect(mapStateToProps, { getProfile })(widthDataUrlProfileContainer);