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

import PostForm from './PostForm';
import { styles } from './styles';

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

const useStyles = makeStyles(styles);
													
const MyPosts = (props) => {
	const { posts, addPost } = props;
	const postsData = preparePostsData(posts);
	const classes = useStyles();

	return (
		<div>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={9}>
					<PostForm addPost={addPost}/>
				</GridItem>
			</GridContainer>

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