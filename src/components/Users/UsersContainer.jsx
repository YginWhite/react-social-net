import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import { followActionCreator, unfollowActionCreator,
		 setUsersActionCreator, setCurrentPageActionCreator,
		 setTotalUsersCountActionCreator, changePagesRangeActionCreator } from './../../redux/usersReducer';

const mapStateToProps = (state) => {
	return { 
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		currentPagesCount: state.usersPage.currentPagesCount,
		currentPagesRange: state.usersPage.currentPagesRange
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch( followActionCreator(userId) );
		},

		unfollow: (userId) => {
			dispatch( unfollowActionCreator(userId) );
		},

		setUsers: (users) => {
			dispatch( setUsersActionCreator(users) );
		},

		setPage: (page) => {
			dispatch( setCurrentPageActionCreator(page) );
		},

		setUsersCount: (count) => {
			dispatch( setTotalUsersCountActionCreator(count) );
		},

		changePagesRange: (step, direction, pagesAmount) => {
			dispatch( changePagesRangeActionCreator(step, direction, pagesAmount) );
		}
	};
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;