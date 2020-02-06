import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, changePagesRange,
		 toggleIsFatching, toggleFollowing } from './../../redux/usersReducer';
import Preloader from './../common/Preloader/Preloader';
import {usersAPI} from './../../api/api';


class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFatching(true);
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
				.then(data => {
					this.props.setUsers(data.items);
					this.props.setTotalUsersCount(data.totalCount);
					this.props.toggleIsFatching(false);
				});
	}

	changePage = (e, pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFatching(true);
		usersAPI.getUsers(pageNumber, this.props.pageSize)
				.then(data => {
					this.props.setUsers(data.items);
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
				 		   followingUsersInProgress={this.props.followingUsersInProgress}
				 		  
				 		   follow={this.props.follow}
				 		   unfollow={this.props.unfollow}
				 		   changePagesRange={this.props.changePagesRange}
				 		   toggleFollowing = {this.props.toggleFollowing}

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
		isFetching: state.usersPage.isFetching,
		followingUsersInProgress: state.usersPage.followingUsersInProgress
	};
};

export default connect(
	mapStateToProps, 
	{ follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, changePagesRange, toggleIsFatching, toggleFollowing }
)(UsersContainer);