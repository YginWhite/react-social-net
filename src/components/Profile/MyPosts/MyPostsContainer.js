import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profileReducer'

const MyPostsContainer = (props) => {
	const state = props.store.getState();

	const { profilePage: {posts, newPostText} } = state;

	const onAddPost = () => {
		props.store.dispatch( addPostActionCreator() );
	};

	const onUpdateText = (text) => {
		props.store.dispatch( updateNewPostTextActionCreator(text) );
	};

	return (
		<MyPosts addPost={onAddPost}
				 updateNewPostText={onUpdateText}
				 posts={posts}
				 newPostText={newPostText} />
	);
};

export default MyPostsContainer;