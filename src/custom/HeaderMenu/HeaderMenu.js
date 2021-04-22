import React from "react";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Divider from "@material-ui/core/Divider";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderMenu(props) {
	const classes = useStyles();
	const { isAuth, logout, handleCloseProfile } = props;
	
	const handleLog = (e) => {
		handleCloseProfile();
		if (isAuth) logout();
	};

	return (
		<MenuList role="menu">
		  <NavLink to='/profile'>
		  	<MenuItem
		  		onClick={handleCloseProfile}
		  		className={classes.dropdownItem}
		  	>
		  		Profile
		  	</MenuItem>
		  </NavLink>
		  <Divider light />

		  {isAuth
		  	?	(	<MenuItem
		  				onClick={handleLog}
		  				className={classes.dropdownItem}
		  			>
		  				Logout
		  			</MenuItem>	)

		  	: (	<NavLink to='/login'>
		  				<MenuItem
		  					onClick={handleLog}
		  					className={classes.dropdownItem}
		  				>
		  					Login
		  				</MenuItem>		  	
		  			</NavLink> )
		  }
		</MenuList>
	);
}