import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import { followActionCreator, unfollowActionCreator,
		 setUsersActionCreator, setCurrentPageActionCreator,
		 setTotalUsersCountActionCreator, changePagesRangeActionCreator,
		 toggleIsFatchingActionCreator } from './../../redux/usersReducer';
import * as axios from 'axios';
import Preloader from './../common/Preloader/Preloader';


class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFatching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			 .then(response => {
			 	this.props.setUsers(response.data.items);
			 	this.props.setUsersCount(response.data.totalCount);
			 	this.props.toggleIsFatching(false);
			 });
	}

	changePage = (e, pageNumber) => {
		this.props.setPage(pageNumber);
		this.props.toggleIsFatching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			 .then(response => {
			 	this.props.setUsers(response.data.items);
			 	this.props.toggleIsFatching(false);
			 });
	}

	render() {
		return (
			<div>
				{this.props.isFetching ? 
					<Preloader/> :
				 	<Users users={this.props.users}
				 		   pageSize={this.props.pageSize}
				 		   totalUsersCount={this.props.totalUsersCount}
				 		  
				 		   currentPage={this.props.currentPage}
				 		   currentPagesCount={this.props.currentPagesCount}
				 		   currentPagesRange={this.props.currentPagesRange}
				 		  
				 		   follow={this.props.follow}
				 		   unfollow={this.props.unfollow}
				 		   changePagesRange={this.props.changePagesRange}

				 		   changePage={this.changePage}
				 	/>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		currentPagesCount: state.usersPage.currentPagesCount,
		currentPagesRange: state.usersPage.currentPagesRange,
		isFetching: state.usersPage.isFetching
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
		},

		toggleIsFatching: (isFetching) => {
			dispatch( toggleIsFatchingActionCreator(isFetching) );
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);