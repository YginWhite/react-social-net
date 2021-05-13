import React from 'react';
import { connect } from 'react-redux';
import Status from './Status';
import { changeStatus } from '../../../redux/profileReducer';
import { selectStatus } from '../../../redux/profileReducer';


const mapStateToProps = state => ({
	status: selectStatus(state) 
});

export default connect(mapStateToProps, { changeStatus })(Status);