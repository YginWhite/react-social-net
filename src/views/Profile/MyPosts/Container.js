import React from 'react'
import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';
import { selectPosts } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const mapStateToProps = state => ({
	posts: selectPosts(state)
});

export default connect(mapStateToProps, { addPost })(MyPosts);