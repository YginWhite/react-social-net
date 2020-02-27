import React from 'react';
import clss from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import {required, maxLength} from './../../../utils/validators';

const MyPosts = (props) => {
	let posts =  props.posts.map(({id, like, message}) => <Post key={id} like={like} message={message}/>);

	const onAddPost = (formData) => {
		props.addPost(formData.newPost);
	};
	
	return (
		<div className={clss.myPosts}>
			<div className={clss.myPosts_newpost}>
				<header>Create new post:</header>

				<PostForm onSubmit={onAddPost}/>
			</div>

			<div className={clss.myPosts_posts}>
				{posts}
			</div>
		</div>
	);
};


const maxLength20 = maxLength(20);
let PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={clss.myPosts_newpost_body}>
				<Field name="newPost" component="textarea" placeholder="write new post..."
				       validate={[required, maxLength20]} />
			</div>

			<div className={clss.myPosts_newpost_submit}>
				<button>Add Post</button>
			</div>
		</form>
	);
};

PostForm = reduxForm({form: 'myPostsAddPost'})(PostForm);

export default MyPosts;