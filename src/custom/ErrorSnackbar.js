import React, { useState } from 'react';
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";

export default function ErrorSnackbar({ message }) {
	const [open, setOpen] = useState(true);
	const [msg, setMsg] = useState(message);

	if (msg !== message) {
		setOpen(true);
		setMsg(message);
	}

	return (
		<Snackbar
		  place="tr"
		  color="danger"
		  icon={AddAlert}
		  message={message}
		  open={open}
		  closeNotification={() => setOpen(false)}
		  close
		/>
	);
}