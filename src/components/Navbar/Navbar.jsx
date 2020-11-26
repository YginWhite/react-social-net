import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
	return (


		<div id="menu">
			<ul>
				<li className="current_page_item">
					<NavLink to='/profile'>Profile</NavLink>
				</li>
				<li>
					<NavLink to='/users'>Users</NavLink>
				</li>
				<li>
					<NavLink to='/dialogs'>Messages</NavLink>
				</li>
				<li>
					<NavLink to='/news'>News</NavLink>
				</li>
				<li>
					<NavLink to='/music'>Music</NavLink>
				</li>
				<li>
					<NavLink to='/settings'>Settings</NavLink>
				</li>
			</ul>
		</div>
	);
}


export default Navbar;