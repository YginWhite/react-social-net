import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const Paths = {
	Profile: '/profile',
	Users: '/users',
	Messages: '/dialogs',
	News: '/news',
	Music: '/music',
	Settings: '/settings'
}

const Navbar = (props) => {
	const pathname = props.location.pathname;
	return (
		<div id="menu">
			<ul className={style.menu}>
				{Object.entries(Paths).map(([key, value], ind) => {
					return (
						<li 
							key={ind}
							className={ pathname.includes(value) ? 'current_page_item' : '' }
						>
							<NavLink to={value}>{key}</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
}


export default withRouter(Navbar);