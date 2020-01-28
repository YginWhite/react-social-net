import React from 'react';
import clss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let posts =  props.posts.map(({id, like, message}) => <Post key={id} like={like} message={message}/>);

	let textareaRef = React.createRef();
	let addPost = () => {
		props.addPost();
	}

	let updateNewPostText = () => {
		const text = textareaRef.current.value;
		props.updateNewPostText(text);
	};
	
	return (
		<div className={clss.myPosts}>
			<div className={clss.myPosts_newpost}>
				<header>Create new post:</header>

				<div className={clss.myPosts_newpost_body}>
					<textarea ref={textareaRef} 
							  value={props.newPostText}
							  onChange={updateNewPostText}/>
				</div>

				<div className={clss.myPosts_newpost_submit}>
					<button onClick={addPost}>Add Post</button>
				</div>
			</div>

			<div className={clss.myPosts_posts}>
				{posts}
			</div>
		</div>
	);
};

export default MyPosts;