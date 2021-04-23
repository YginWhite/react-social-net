import React from "react";
import { Redirect } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardIcon from "components/Card/CardIcon.js";

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import CheckboxInput from '../../custom/Checkbox';
import { styles } from './styles';
import { loginValidator } from './validators';



const useStyles = makeStyles(styles);

const Login = (props) => {
	const classes = useStyles();

	const fieldLabel = (meta, defaultText) => {
		return meta.touched && meta.error || defaultText;
	};
	const fieldSuccess = (meta) => {
		return meta.touched && !meta.error;
	};
	const fieldError = (meta) => {
		return meta.touched && !!meta.error;
	};

	const onSubmit = (values) => {
		props.login(values.email, values.username, values.remember);
	};


	if (props.isAuth) return <Redirect to={props.location.state.referrer} /> 

	return (
		<GridContainer justify="center">
			<GridItem xs={12} sm={12} md={6}>
				<Card>
					<CardHeader color="primary" icon stats className={classes.header}>
					  <CardIcon color="primary">
              <AccountBoxIcon />
            </CardIcon>
					</CardHeader>

					<Form
						onSubmit={onSubmit}
						validate={loginValidator}
						render={({ handleSubmit, submitting, ...rest }) => (
							<form onSubmit={handleSubmit}>
								<CardBody>
									<GridContainer>
										<GridItem xs={12} sm={12} md={12}>
											<Field
												name="username"
												render={({ input, meta }) => (
													<CustomInput
													  labelText={fieldLabel(meta, 'Password')}
													  id="username"
													  name="username"
													  formControlProps={{
													    fullWidth: true
													  }}
													  inputProps={{ ...input }}
													  success={fieldSuccess(meta)}
													  error={fieldError(meta)}
													/>
												)}
											/>
										</GridItem>

										<GridItem xs={12} sm={12} md={12}>
											<Field
												name="email"
												render={({ input, meta }) => (
													<CustomInput
													  labelText={fieldLabel(meta, 'Email')}
													  id="email"
													  name="email"
													  formControlProps={{
													    fullWidth: true
													  }}
													  inputProps={{ ...input }}
													  success={fieldSuccess(meta)}
													  error={fieldError(meta)}
													/>
												)}
											/>
										</GridItem>

										<GridItem xs={12} sm={12} md={12}>
											<Field
												name="remember"
												type="checkbox"
												render={({ input, meta }) => (
													<FormControlLabel
														className={classes.checkboxLabel}
									          control={<CheckboxInput {...input} />}
									          label={<span className={classes.labelFontSize}>Remember Me</span>}
										      />
												)}
											/>
										</GridItem>

									</GridContainer>
								</CardBody>
								<CardFooter>
									<Button type="submit" disabled={rest.hasValidationErrors} color="primary">Login</Button>
								</CardFooter>
							</form>
						)}
					/>
				</Card>
			</GridItem>
		</GridContainer>
	);
};

export default Login;