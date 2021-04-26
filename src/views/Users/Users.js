import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import avatar from "assets/img/faces/marc.jpg";

import styles from "assets/jss/material-dashboard-react/cardImagesStyles.js";

const useStyles = makeStyles(styles);

const testData = {
  "items": [
  {
    "name": "Shubert",
    "id": 1,
    "photos": {
      "small": null,
      "large": null
    },
    "status": null,
    "followed": false
  },
  {
    "name": "Hacker",
    "id": 2,
    "photos": {
      "small": null,
      "large": null
    },
    "status": null,
    "followed": false
  }
  ],
  "totalCount": 30,
  "error": null
}


const Users = (props) => {
	const classes = useStyles();

	return (
		<div>
			<div>
				Pagination
			</div>

			<GridContainer justify="space-around">
				{testData.items.map(user => (
					<GridItem xs={12} sm={12} md={6} key={user.id}>
						<Card>
				      <img
				        className={classes.cardImgTop}
				        alt={user.name}
				        style={{ width: "100%", display: "block" }}
				        src={avatar}
				      />
				      <CardBody>
				        <h4>{user.name}</h4>
				        <p>{user.status}</p>
				        <Button color="primary">Follow</Button>
				      </CardBody>
						</Card>
					</GridItem>
				))}
			</GridContainer>
		</div>
	);
};

export default Users;