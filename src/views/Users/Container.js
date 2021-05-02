import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getUsers, follow, unfollow, selectUsers, selectTotalUsersCount } from '../../redux/usersReducer';

import Users from './Users';


class Container extends React.Component {
	render() {
		return (
			<div>
				<Users 
					users={this.props.users}
					totalUsers={this.props.totalUsers}
					getUsers={this.props.getUsers}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
			</div>
		);
	}
}


const mapStateToProps = (state) => ({
	users: selectUsers(state),
	totalUsers: selectTotalUsersCount(state)
})


export default compose(
	connect(mapStateToProps, { getUsers, follow, unfollow })
)(Container);