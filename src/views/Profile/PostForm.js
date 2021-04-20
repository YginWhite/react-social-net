import React from "react";
import { Form, Field } from 'react-final-form';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "components/CustomButtons/Button.js";

import { postValidator } from './validators';


import { styles } from './styles';


const useStyles = makeStyles(styles);

									

const PostForm = () => {
	const classes = useStyles();

	return (
		<Form
			onSubmit={values => console.log(values)}
			validate={postValidator}
			render={(props) => (
				<form onSubmit={props.handleSubmit}>
					<Card>
						<CardBody>
							<Field
			          name="newPost"
			          render={({ input, meta }) => (
			            <div>
			              <InputLabel style={{ color: "#AAAAAA" }}>Create new Post</InputLabel>
			              <CustomInput
			                labelText={meta.touched && meta.error || "post text goes here"}
			                id="newPost"
			                name="newPost"
			                formControlProps={{
			                  fullWidth: true
			                }}
			                inputProps={{
			                  multiline: true,
			                  rows: 5,
			                  ...input
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