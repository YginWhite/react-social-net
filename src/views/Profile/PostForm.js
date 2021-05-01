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

import { postValidator } from './validators';

import { styles } from './styles';


const useStyles = makeStyles(styles);
									
const PostForm = (props) => {
	const { addPost } = props;
	const classes = useStyles();

	return (
		<Form
			onSubmit={(values, form) => {
				addPost(values.newPost);
				Object.keys(values).forEach(key => {
				  form.change(key, undefined);
				  form.resetFieldState(key);
				});
			}}
			validate={postValidator}
			render={(props) => (
				<form onSubmit={props.handleSubmit}>
					<Card>
					  <CardHeader color="danger">
              <h4 className={classes.cardTitle}>Create new Post</h4>
					  </CardHeader>
						<CardBody>
							<Field
			          name="newPost"
			          render={({ input, meta }) => (
			            <div>
			              <CustomInput
			                labelText={(meta.touched && meta.error) || "input post text"}
			                id="newPost"
			                name="newPost"
			                formControlProps={{
			                  fullWidth: true
			                }}
			                inputProps={{
			                  multiline: true,
			                  rows: 5,
			                  ...input,
			                }}
			                success={meta.touched && !meta.error}
			                error={meta.touched && !!meta.error}
			              />
			            </div>
			          )}
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