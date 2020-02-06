import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import { follow, unfollow,  changePagesRange,
		 getUsers, changePage } from './../../redux/usersReducer';

import Preloader from './../common/Preloader/Preloader';


class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	changePage = (e, pageNumber) => {
		this.props.changePage(pageNumber, this.props.pageSize);
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
	{ follow, unfollow, changePagesRange,
	  getUsers, changePage }
)(UsersContainer);