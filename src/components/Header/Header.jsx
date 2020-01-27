import React from 'react';
import clss from './Header.module.css';

const Header = () => {
	return (
		<header className={clss.appHeader}>
			<div className={`${clss.appHeader_picture} ${clss.appHeader_picture__left}`}>
				<img className={clss.appHeader_picture_img}
					 src="https://img.icons8.com/ios/100/000000/popular-man.png"/>
			</div>

			<div className={`${clss.appHeader_picture} ${clss.appHeader_picture__right}`}>
				<img className={clss.appHeader_picture_img}
					 src="https://img.icons8.com/ios/100/000000/popular-woman.png" />
			</div>

			<div className={`${clss.appHeader_picture} ${clss.appHeader_picture__center}`}>
				<img className={clss.appHeader_picture_img}
					 src="https://img.icons8.com/carbon-copy/100/000000/messaging-.png"/>
			</div>

			<div className={`${clss.appHeader_slogan} ${clss.appHeader_slogan__upper}`}>
				<span>Talk about everything ...</span>
			</div>

			<div className={`${clss.appHeader_slogan} ${clss.appHeader_slogan__lower}`}>
				<span>Internet joins of people ...</span>
			</div>
		</header>
	);
}

/*const Header = () => {
	return (
		<header className={classes.header}>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDY_4wqrhI71TkYkqtXxiDDgrF8GvD-2TNQp4EUWXvVkSaQRFS&s" alt="Logo"/>
		</header>
	);
}*/

/*<img src="https://img.icons8.com/carbon-copy/100/000000/messaging-.png">*/

export default Header;