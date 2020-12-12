import React from 'react';

const Post = (props) => {
	return (
    	<li className={!props.ind ? 'first' : ''}>
            <p className="date"><a>Jan<b>05</b></a></p>
            <h3>{props.like} Likes</h3>
            <p>{props.message}</p>
        </li>
  );
};

export default Post;