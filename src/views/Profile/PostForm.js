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

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  addPostBtn: {
  	color: 'gray',
  	backgroundColor: '#f2f3f4'
  }
};

const useStyles = makeStyles(styles);

const validate = values => {
	const errors = {};
  if (!values.newPost) {
    errors.newPost = 'Required';
  }
  
  return errors;
}						
									

const PostForm = () => {
	const classes = useStyles();

	return (
		<Form
			onSubmit={values => console.log(values)}
			validate={validate}
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