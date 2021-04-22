import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Divider from "@material-ui/core/Divider";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderMenu(props) {
	const classes = useStyles();
	console.log(props);
	return (
		<MenuList role="menu">
		  <MenuItem
		    onClick={props.handleCloseProfile}
		    className={classes.dropdownItem}
		  >
		    Profile
		  </MenuItem>
		  <Divider light />
		  <MenuItem
		    onClick={props.handleCloseProfile}
		    className={classes.dropdownItem}
		  >
		    Logout
		  </MenuItem>
		</MenuList>
	);
}