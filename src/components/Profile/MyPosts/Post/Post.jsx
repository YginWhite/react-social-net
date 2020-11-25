import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
	return (
    	<li className={!props.ind ? 'first' : ''}>
            <p className="date"><a href="#">Jan<b>05</b></a></p>
            <h3>{props.like} Likes</h3>
            <p>{props.message}</p>
        </li>
  );
};

export default Post;