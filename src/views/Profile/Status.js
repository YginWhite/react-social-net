import React, { useState, useEffect } from 'react';
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import CreateIcon from '@material-ui/icons/Create';
//core components
import CustomInput from "components/CustomInput/CustomInput.js";

export default function Status (props) {
	const { status, styles, changeStatus } = props;

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
		<h6 
			className={styles}
			onDoubleClick={() => setEditMode(true)}
		>
			{statusText || 'No status'}
		</h6>
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