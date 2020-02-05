import React from 'react';
import clss from './Post.module.css';

const Post = (props) => {
	return (
    	<div className={clss.post}>
    		<div className={clss.post_ava}>
    			<img alt="avatar" src="https://img.icons8.com/carbon-copy/100/000000/administrator-male.png" />
    		</div>
    		<div className={clss.post_message}>
    			{props.message}
    		</div>
            <div className={clss.post_likes}>
                <span>{props.like} Likes</span>
            </div>
    	</div>
  );
};

export default Post;