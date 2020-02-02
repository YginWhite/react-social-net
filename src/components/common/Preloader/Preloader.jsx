import React from 'react';

const imgUrl = `https://i.stack.imgur.com/ndqUb.gif`;

const Preloader = (props) => {
	return (
		<div>
			<img src={imgUrl}/>			
		</div>
	);
};

export default Preloader;