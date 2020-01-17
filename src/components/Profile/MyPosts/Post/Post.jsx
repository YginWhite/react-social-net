import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	return (
    	<div className={classes.postBody}>
    		<div className={classes.postAva}>
    			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUh3ZTuqwR7eVwjlLqxninlzeDd_8DP0pKUFgfqFAMEeOS0ZO&s" alt="post_ava"/>
    		</div>
    		<div className={classes.postText}>
    			{props.message}
    		</div>
            <div>
                <span className={classes.postLike}>{props.like} Likes</span>
            </div>
    	</div>
  );
};

export default Post;