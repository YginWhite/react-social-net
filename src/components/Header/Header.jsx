import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';
import pict02 from './../../images/pic02.jpg';

const Header = (props) => {
	return (
		<div id="header">
			<div id="logo">
				<img src={pict02} alt="avatar" />
				<h1><a href="#">Privy</a></h1>
				<span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a></span>

				{props.isAuth
					? 	<div className={style.header_login}>{`login: ${props.login}`}</div>
					: 	<div className="">
							<NavLink to='/login'>Login</NavLink>
						</div>}
			</div>

			<div id="menu">
				<ul>
					<li className="current_page_item"><a href="#" accesskey="1" title="">Homepage</a></li>
					<li><a href="#" accesskey="2" title="">Our Clients</a></li>
					<li><a href="#" accesskey="3" title="">About Us</a></li>
					<li><a href="#" accesskey="4" title="">Careers</a></li>
					<li><a href="#" accesskey="5" title="">Contact Us</a></li>
				</ul>
			</div>
		</div>
	);
}

export default Header;