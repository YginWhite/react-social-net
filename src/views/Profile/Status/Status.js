import React, { useState, useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import CreateIcon from '@material-ui/icons/Create';
//core components
import CustomInput from "components/CustomInput/CustomInput.js";
import { styles } from './styles';


const useStyles = makeStyles(styles);

export default function Status ({ status, changeStatus }) {
	const classes = useStyles();

	const [statusText, setStatusText] = useState(status);
	const [editMode, setEditMode] = useState(false);

	const onStatusChanged = () => {
		changeStatus(statusText);
		setEditMode(false);
	};

	useEffect(() => {
		setStatusText(status);
	}, [status]);

	if (!editMode) return (
		<Tooltip
			title="Double click to change status text"
			placement="top"
			arrow
		>
			<h6 
				className={classes.textCenter}
				onDoubleClick={() => setEditMode(true)}
			>
				{statusText || 'No status'}
			</h6>
		</Tooltip>
	); 

	return (
		<CustomInput
		      labelText="Edit status"
		      id="statusText"
		      formControlProps={{
		        fullWidth: true
		      }}
		      inputProps={{
		        endAdornment: (
		          <InputAdornment position="end">
		            <CreateIcon />
		          </InputAdornment>
		        ),
		        autoFocus: true,
		        value: statusText,
		        onChange: (e) => setStatusText(e.target.value),
		        onKeyDown: (e) => {
		        	if (e.keyCode === 13) {
		        		onStatusChanged();
		        	}
		        },
		        onBlur: onStatusChanged
		      }}
		    />
	);
} 