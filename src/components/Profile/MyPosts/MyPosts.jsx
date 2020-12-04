import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import {required, maxLength} from './../../../utils/validators';
import { TextareaInput } from './../../common/FormControls/FormControls';

const MyPosts = (props) => {
	let posts =  props.posts.map(({id, like, message}, ind) => <Post key={id} like={like} message={message} ind={ind}/>);

	const onAddPost = (formData) => {
		props.addPost(formData.newPost);
	};

	return (
		<div id="featured">
			<div className="title">
				<h2>My posts</h2>
				<div className="byline">
					<span>Create new post:</span>
					<PostForm onSubmit={onAddPost}/>
				</div>
			</div>

			<ul class="style1">
				{posts}
			</ul>
		</div>
	);
};

const maxLength200 = maxLength(200);
let PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={style.posts_form}>
			<div>
				<Field name="newPost" component={TextareaInput} placeholder="write new post..." rows="6"
				       validate={[required, maxLength200]} />
			</div>
			<div>
				<button className="button">
					<span className="fa fa-pencil"></span>
					<span>Add Post</span>
				</button>
			</div>
		</form>
	);
};

PostForm = reduxForm({form: 'myPostsAddPost'})(PostForm);

export default MyPosts;