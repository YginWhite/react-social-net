import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { updateProfileData } from '../../../redux/profileReducer';
import { selectProfile } from '../../../redux/profileReducer';


const mapStateToProps = state => ({
	profile: selectProfile(state)
});

export default connect(mapStateToProps, { updateProfileData })(ProfileForm);