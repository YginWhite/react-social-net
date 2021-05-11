import React from 'react';
import { Form, Field } from 'react-final-form';
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import CheckboxInput from '../../custom/Checkbox';
import InputTextField from '../../custom/InputTextField';


const styles = {
	lookingJob: {
		height: '100%',
		display: 'flex',
		alignItems: 'flex-end',
		'& > span': {
			padding: '11px'
		}
	},
	buttons: {
		marginTop: '20px'
	}
};

const useStyles = makeStyles(styles);

const socials = ['github', 'vk', 'facebook', 'instagram', 'twitter', 'website', 'youtube', 'mainLink'];

const validate = values => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = 'Required';
  }
  if (!values.aboutMe) {
    errors.aboutMe = 'Required';
  }
  return errors;
};


export default function ProfileForm({ profile, updateProfileData, toggleEditMode }) {
	const classes = useStyles();
	const onSubmit = async values => {
		let profileData = { ...values };
		delete profileData.photos;
		const errorsMessage = await updateProfileData(profileData);
		if (!errorsMessage.length) toggleEditMode();
	};

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{ ...profile }}
			validate={validate}
			render={({handleSubmit, ...rest}) => (
				<form onSubmit={handleSubmit}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6}>
							<InputTextField 
								name="fullName"
								label="Name"
							/>
						</GridItem>

						<GridItem xs={12} sm={12} md={6}>
							<Field
								name="lookingForAJob"
								type="checkbox"
								render={({input, meta}) => (
									<div className={classes.lookingJob}>
										<span>Looking for a job:</span>
										<CheckboxInput name="lookingForAJob" {...input} />
									</div>
								)}
							/>
						</GridItem>

						<GridItem xs={12} sm={12} md={12}>
							<InputTextField 
								name="aboutMe"
								label="About Me"
							/>
						</GridItem>

						<GridItem xs={12} sm={12} md={12}>
							<InputTextField 
								name="lookingForAJobDescription"
								label="Job description"
								textOptions={{multiline: true, rows: 3}}
							/>
						</GridItem>

						{socials.map((name) => (
							<GridItem xs={12} sm={12} md={6} key={name}>
								<InputTextField 
									name={`contacts.${name}`}
									label={name}
								/>
							</GridItem>
						))}

						<GridItem>
							<div className={classes.buttons}>
								<Button type="submit" color="success" 
									disabled={rest.hasValidationErrors || rest.submitting}>Submit</Button>
								<Button type="button" color="primary" onClick={rest.form.reset}>Reset</Button>
								<Button type="button" color="info" onClick={toggleEditMode}>Cancel</Button>
							</div>
						</GridItem>
					</GridContainer>	
				</form>
			)}	
		/>
	);
}