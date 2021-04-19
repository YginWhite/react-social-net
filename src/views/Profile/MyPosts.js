import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "components/CustomButtons/Button.js";

const posts = [
	{id: '1', like: '5', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquid, accusantium aliquam fugiat voluptates nihil natus ipsam, voluptate qui esse fuga corrupti quas unde a, possimus eum! Molestias, saepe, tempore.'},
	{id: '2', like: '15', message: 'what is that?'},
	{id: '3', like: '25', message: 'It is automatic fill when need some text'},
	{id: '4', like: '3', message: 'Thanks, now and i know about it!'},
	{id: '5', like: '10', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sed explicabo similique! Consequuntur magnam, et nostrum id possimus hic quibusdam ipsum alias iusto, eos consequatur aut quasi suscipit eum porro.'}
];

const preparePostsData = (posts) => {
	let tableHead = [];
	let tableData = [];

	if (posts.length) {
		tableHead = Object.entries(posts[0]).map(([key, value]) => {
			return `${key[0].toUpperCase()}${key.slice(1)}`;
		});

		tableData = posts.map(post => {
			return Object.entries(post).map(([key, value]) => {
				return value;
			})
		});
	}

	return { tableHead, tableData };
};


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

const PostForm = () => {
	const classes = useStyles();

	return (
		<GridContainer justify="center">
			<GridItem xs={12} sm={12} md={9}>
				<Card>
					<CardBody>
						<GridContainer>
							<GridItem xs={12} sm={12} md={12}>
								<InputLabel style={{ color: "#AAAAAA" }}>Create new Post</InputLabel>
								<CustomInput
								  labelText="post text goes here"
								  id="newPost"
								  formControlProps={{
								    fullWidth: true
								  }}
								  inputProps={{
								    multiline: true,
								    rows: 5
								  }}
								/>
							</GridItem>
						</GridContainer>	
					</CardBody>
					<CardFooter>
					  <Button className={classes.addPostBtn}>Add Post</Button>
					</CardFooter>
				</Card>
			</GridItem>
		</GridContainer>
	);
};

const MyPosts = () => {
	const postsData = preparePostsData(posts);
	const classes = useStyles();

	return (
		<div>
			<PostForm/>

			<GridContainer>
			  <GridItem xs={12} sm={12} md={12}>
			    <Card>
			      <CardHeader color="primary">
			        <h4 className={classes.cardTitleWhite}>Posts</h4>
			        <p className={classes.cardCategoryWhite}>
			          My posts
			        </p>
			      </CardHeader>
			      <CardBody>
			        <Table
			          tableHeaderColor="primary"
			          tableHead={postsData.tableHead}
			          tableData={postsData.tableData}
			        />
			      </CardBody>
			    </Card>
			  </GridItem>
			</GridContainer>
		</div>
	);
};

export default MyPosts;