import React from 'react';
import clss from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
	return (
		<aside className={clss.appAside}>
			<ul className={clss.appAside_menu}>
				<li className={clss.appAside_menu_item}>
					<img src="https://img.icons8.com/ios/100/000000/contract-job.png"/>
					<span><NavLink to='/profile'>Profile</NavLink></span>
				</li>
				<li className={clss.appAside_menu_item}>
					<img src="https://img.icons8.com/ios/100/000000/multiple-messages.png"/>
					<span><NavLink to='/dialogs'>Messages</NavLink></span>
				</li>
				<li className={clss.appAside_menu_item}>
					<img src="https://img.icons8.com/carbon-copy/100/000000/news.png"/>
					<span><NavLink to='/news'>News</NavLink></span>
				</li>
				<li className={clss.appAside_menu_item}>
					<img src="https://img.icons8.com/wired/128/000000/music.png"/>
					<span><NavLink to='/music'>Music</NavLink></span>
				</li>
				<li className={clss.appAside_menu_item}>
					<img src="https://img.icons8.com/wired/128/000000/settings.png"/>
					<span><NavLink to='/settings'>Settings</NavLink></span>
				</li>
			</ul>
		</aside>
	);
}
/*const Navbar = (props) => {
	return (
		<nav className={classes.nav}>
			<div className={`${classes.item}`}>
				<NavLink to='/profile'>Profile</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to='/dialogs'>Messages</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to='/news'>News</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to='/music'>Music</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to='/settings'>Settings</NavLink>
			</div>

			<Friends friends={props.state.friends}/>
		</nav>
	);
};

function Friends(props) {
	const friends = props.friends;
	let friendsElements = friends.map((friend, ind) => {
		return (
			<div  className={classes.friend} key={ind}>
				<div className={classes.friendAva}>ava</div>
				<div>{friend.name}</div>
			</div>
		);
	});

	return (
		<div className={classes.friends}>
			<div>Friends:</div>
			{friendsElements}
		</div>
	);
}*/

export default Navbar;