import React from "react";
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
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";

import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const customStyles = {
  header: {
  	display: 'flex',
  	justifyContent: 'center'
  },
  checkboxLabel: {
  	paddingTop: '20px'
  },
  labelFontSize: {
  	fontSize: '12px'
  }
};

const useStyles = makeStyles({...styles, ...customStyles});

const CheckboxInp = (input) => {
	const classes = useStyles();
	return (
		<Checkbox
			inputProps={{ ...input }}
			name="remember"
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

const Login = () => {
	const classes = useStyles();

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
						onSubmit={values => console.log(values)}
						render={(props) => (
							<form onSubmit={props.handleSubmit}>
								<CardBody>
									<GridContainer>

										<GridItem xs={12} sm={12} md={12}>
											<Field
												name="username"
												render={({ input, meta }) => (
													<CustomInput
													  labelText={(meta.touched && meta.error || "Username")}
													  id="username"
													  name="username"
													  formControlProps={{
													    fullWidth: true
													  }}
													  inputProps={{ ...input }}
													  success={meta.touched && !meta.error}
													  error={meta.touched && !!meta.error}
													/>
												)}
											/>
										</GridItem>

										<GridItem xs={12} sm={12} md={12}>
											<Field
												name="email"
												render={({ input, meta }) => (
													<CustomInput
													  labelText={(meta.touched && meta.error || "Email")}
													  id="email"
													  name="email"
													  formControlProps={{
													    fullWidth: true
													  }}
													  inputProps={{ ...input }}
													  success={meta.touched && !meta.error}
													  error={meta.touched && !!meta.error}
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
									          control={<CheckboxInp {...input} />}
									          label={<span className={classes.labelFontSize}>Remember Me</span>}
										      />
												)}
											/>
										</GridItem>

									
									</GridContainer>
								</CardBody>
								<CardFooter>
									<Button type="submit" color="primary">Login</Button>
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