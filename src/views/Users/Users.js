import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Muted from "components/Typography/Muted.js";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Preloader from '../../custom/Preloader/Preloader';
import avatar from "assets/img/faces/marc.jpg";
import styles from "assets/jss/material-dashboard-react/cardImagesStyles.js";

const useStyles = makeStyles(styles);

const Users = (props) => {
	const { users, totalUsers, getUsers } = props;

	const [currentPage, setCurrentPage] = useState(58);
	const [usersCount, setUsersCount] = useState(3);
	const [usersLoading, setUsersLoading] = useState(false);

	useEffect(() => {
		const fetchUsers = async () => {
			setUsersLoading(true);
			await getUsers(currentPage, usersCount);
			setUsersLoading(false);
		}; 

		fetchUsers();
	}, [currentPage, usersCount]);

	const pageCount = Math.ceil(totalUsers / usersCount);

	const paginateForward = () => {
		if (currentPage === pageCount) return;
		setCurrentPage(currentPage + 1);
	};
	const paginateBack = () => {
		if (currentPage === 1) return;
		setCurrentPage(currentPage - 1); 
	}

	const classes = useStyles();

	return (
		<div>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={6}>
					<div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
						<Button justIcon color="primary" onClick={paginateBack}>
							<ArrowBackIosIcon />
						</Button>
						<Muted>{`${currentPage} of ${pageCount}`}</Muted>
						<Button justIcon color="primary" onClick={paginateForward}>
							<ArrowForwardIosIcon />
						</Button>
					</div>
				</GridItem>
			</GridContainer>

			<GridContainer justify="space-around">
				{usersLoading && <Preloader/>}
				{!usersLoading && users.map(user => (
					<GridItem xs={12} sm={12} md={4} key={user.id}>
						<Card>
				      <img
				        className={classes.cardImgTop}
				        alt={user.name}
				        style={{ width: "100%", display: "block" }}
				        src={user.photos.large ? user.photos.large : avatar}
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