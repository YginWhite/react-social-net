import React, { useState, useEffect, useReducer } from "react";
import { NavLink } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import Pagination from './Pagination';
import Preloader from '../../custom/Preloader/Preloader';
import avatar from "assets/img/user.jpg";
import styles from "assets/jss/material-dashboard-react/cardImagesStyles.js";

const useStyles = makeStyles(styles);

const reducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return [ ...state, action.userId ];
		case 'remove':
			return state.filter((id) => action.userId !== id);
		default:
			return state;
	}
};


const Users = (props) => {
	const { users, totalUsers, getUsers, follow, unfollow } = props;

	const [currentPage, setCurrentPage] = useState(77);
	const [usersCount, setUsersCount] = useState(3);
	const [usersLoading, setUsersLoading] = useState(false);
	const [followingInProgress, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		const fetchUsers = async () => {
			setUsersLoading(true);
			await getUsers(currentPage, usersCount);
			setUsersLoading(false);
		}; 

		fetchUsers();
	}, [currentPage, usersCount]);

	const handleClick = async (user) => {
		const { id, followed } = user;
		const callback = followed ? unfollow : follow;
		dispatch({ type: 'add', userId: id });
		await callback(id);
		dispatch({ type: 'remove', userId: id });
	};

	const isDisabled = (userId) => followingInProgress.includes(userId);

	const classes = useStyles();

	return (
		<div>
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={6}>
					<Pagination
						pageNumber={currentPage}
						setPageNumber={setCurrentPage} 
						totalItems={totalUsers}
						itemsCount={usersCount}
					/>
				</GridItem>
			</GridContainer>

			<GridContainer justify="space-around">
				{usersLoading && <Preloader/>}
				{!usersLoading && users.map(user => (
					<GridItem xs={12} sm={12} md={4} key={user.id}>
						<Card>
							<NavLink to={`/profile/${user.id}`}>
								<img
								  className={classes.cardImgTop}
								  alt={user.name}
								  style={{ width: "100%", display: "block" }}
								  src={user.photos.large ? user.photos.large : avatar}
								/>
							</NavLink>
				      <CardBody>
				        <h4>{user.name}</h4>
				        <p>{user.status}</p>
				        <Button 
				        	color="primary"
				        	onClick={() => handleClick(user)}
				        	disabled={isDisabled(user.id)}
				        >
				        	{user.followed ? 'Unfollow' : 'Follow'}
				        </Button>
				      </CardBody>
						</Card>
					</GridItem>
				))}
			</GridContainer>
		</div>
	);
};

export default Users;