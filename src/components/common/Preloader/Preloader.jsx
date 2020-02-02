import React from 'react';
import styles from './Preloader.module.css';

const imgUrl = `https://i.stack.imgur.com/ndqUb.gif`;

const Preloader = (props) => {
	return (
		<div className={styles.preloader}>
			<img src={imgUrl}/>			
		</div>
	);
};

export default Preloader;