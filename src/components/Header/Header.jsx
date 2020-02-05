import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={style.appHeader}>
			<div className={style.appHeader_pict}>
				<img alt="banner" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzY3pn3zqd9CsNRH7-y0P3fw_1H8HkW4p0BSXHLxxo3J6oIKlE" />
			</div>

			<div className={`${style.appHeader_picture} ${style.appHeader_picture__left}`}>
				<img alt="banner" className={style.appHeader_picture_img}
					 src="data:image/png;base64,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"/>
			</div>

			{props.isAuth ? 
				<div className={style.appHeader_logged}>
					{`login: ${props.login}`}
				</div> : 
				<div className={style.appHeader_login}>
					<NavLink to='/login'>Login</NavLink>
				</div>}
			

			<div className={`${style.appHeader_slogan} ${style.appHeader_slogan__upper}`}>
				<span>Talk about everything ...</span>
			</div>

			<div className={`${style.appHeader_slogan} ${style.appHeader_slogan__lower}`}>
				<span>Internet joins of people ...</span>
			</div>
		</header>
	);
}

export default Header;

//https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjbPVqn2-ZdOTjUw8_VqA3DA511ZYquZj8AbfLecammkaRl1E0