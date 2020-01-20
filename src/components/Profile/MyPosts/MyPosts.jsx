import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/state'

const MyPosts = (props) => {
	let posts =  props.posts.map(({id, like, message}) => <Post key={id} like={like} message={message}/>);

	let textareaRef = React.createRef();
	let addPost = () => {
		props.dispatch( addPostActionCreator() );
	}

	let onPostTextChange = () => {
		const text = textareaRef.current.value;
		props.dispatch( updateNewPostTextActionCreator(text) );
	};
	
	return (
		<div className={classes.posts}>
			<div className={classes.newPost}>
				<h2>New Post</h2>
				<div>
					<textarea ref={textareaRef} 
							  value={props.newPostText}
							  onChange={onPostTextChange}/>
				</div>
				<div>
					<button onClick={addPost}>Add Post</button>
				</div>
			</div>
			<div className={classes.allPosts}>
				{posts}
			</div>
		</div>
	);
};

export default MyPosts;