import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

let prevClickedItem = null;
const handleClick = (e) => {
	const elem = e.target.parentNode;
	elem.classList.add('current_page_item');
	if (prevClickedItem) prevClickedItem.classList.remove('current_page_item');
	prevClickedItem = elem;
};

const Navbar = () => {
	return (
		<div id="menu" onClick={handleClick}>
			<ul className={style.menu}>
				<li>
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