import React from 'react';
import style from './Header.module.css';
import pict02 from './../../images/pic02.jpg';
import Navbar from './../Navbar/Navbar'

const Header = (props) => {
	return (
		<div id="header">
			<div id="logo">
				<img src={pict02} alt="avatar" />
				<h1><a href="#">Privy</a></h1>
				<span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a></span>

				{props.isAuth
					? 	<div className={style.header_login}>
							{`login: ${props.login}`}
							<br />
							<button onClick={ e => props.logout() }>Logout</button>
						</div>

					: 	<div className="">
							{/*<NavLink to='/login'>Login</NavLink>*/}
						</div>}
			</div>

			<Navbar />
		</div>
	);
}

export default Header;