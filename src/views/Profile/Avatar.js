import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import CustomInput from "components/CustomInput/CustomInput.js";
import Preloader from '../../custom/Preloader/Preloader';
import avatar from "assets/img/user.jpg";


const styles = {
	preloaderContainer: {
		width: '130px',
		height: '130px',
		display: 'flex',
		alignItems: 'center'
	},
	hidden: {
		display: 'none'
	}
};

const useStyles = makeStyles(styles);


export default function Avatar({ profile, changePhoto, isOwner }) {
	const [avatarLoading, setAvatarLoading] = useState(false);
	const ref = React.createRef();
	const classes = useStyles();

	const photo = profile.photos.large ? profile.photos.large : avatar;

	const onAvatarClicked = () => {
		if (!isOwner) return;
		ref.current.firstChild.click();
		setAvatarLoading(true);
	};
	const onAvatarChanged = async (e) => {
		let file = e.target.files[0];
		if (file) {
		  await changePhoto(file);
		  setAvatarLoading(false);
		} else {
		  setAvatarLoading(false);
		}
	};

	return (
		<div>
			{avatarLoading
			  ? <div className={classes.preloaderContainer}>
			      <Preloader/>
			    </div>
			  : <Tooltip
			  		title="Double click to change photo"
			  		placement="right"
			  		arrow 
			  	>
				  	<a>
				      <img 
				        src={photo} 
				        alt="..." 
				        onDoubleClick={onAvatarClicked}
				      />
				    </a>
				  </Tooltip>}

			<div className={classes.hidden}>
			  <CustomInput
			    inputProps={{
			      type: "file",
			      ref: ref,
			      onChange: onAvatarChanged
			    }}
			    formControlProps={{
			      fullWidth: true
			    }}
			  />
			</div>
		</div>
	);
}