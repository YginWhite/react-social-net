import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
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
}

export default Navbar;