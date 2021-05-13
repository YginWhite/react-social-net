import React from 'react';
import { connect } from 'react-redux';
import { selectProfile } from '../../../redux/profileReducer';
import { changePhoto } from '../../../redux/profileReducer';
import Avatar from './Avatar';


const mapStateToProps = state => ({
	profile: selectProfile(state)
});

export default connect(mapStateToProps, { changePhoto })(Avatar);