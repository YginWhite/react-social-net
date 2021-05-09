import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";

import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const useStyles = makeStyles(styles);

const CheckboxInp = ({ name, ...input }) => {
	const classes = useStyles();
	return (
		<Checkbox
			inputProps={{ ...input }}
			name={name}
		  checkedIcon={<Check className={classes.checkedIcon} />}
		  icon={<Check className={classes.uncheckedIcon} />}
		  classes={{
		    checked: classes.checked,
		    root: classes.root
		  }}
		  checked={input.checked}
		/>
	);
};

export default CheckboxInp;