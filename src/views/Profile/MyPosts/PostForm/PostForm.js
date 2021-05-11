import React from "react";
import { Form, Field } from 'react-final-form';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import CardHeader from "components/Card/CardHeader.js";

import InputTextField from '../../../../custom/InputTextField';
import { postValidator } from './validators';
import { styles } from './styles';


const useStyles = makeStyles(styles);
									
const PostForm = ({ addPost }) => {
	const classes = useStyles();
	const clearFields = (values, form) => {
		Object.keys(values).forEach(key => {
		  form.change(key, undefined);
		  form.resetFieldState(key);
		});
	};
	const onSubmit = (values, form) => {
		addPost(values.newPost);
		clearFields(values, form);
	};

	return (
		<Form
			onSubmit={onSubmit}
			validate={postValidator}
			render={(props) => (
				<form onSubmit={props.handleSubmit}>
					<Card>
					  <CardHeader color="danger">
              <h4 className={classes.cardTitle}>Create new Post</h4>
					  </CardHeader>
						<CardBody>
							<InputTextField 
								name="newPost"
								label="input post text"
								textOptions={{multiline: true, rows: 5}}
							/>
						</CardBody>
						<CardFooter>
							<Button 
								type="submit" 
								className={classes.addPostBtn}
								disabled={props.hasValidationErrors}
							>
								Add Post
							</Button>
						</CardFooter>
					</Card>
				</form>
			)}
		/>
	);
};

export default PostForm;