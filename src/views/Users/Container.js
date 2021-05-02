import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getUsers, follow, unfollow } from '../../redux/usersReducer';

import Users from './Users';

class Container extends React.Component {
	componentDidMount() {
		//console.log(this.props);
	}

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
	users: state.users.users,
	totalUsers: state.users.totalCount
})

export default compose(
	connect(mapStateToProps, { getUsers, follow, unfollow })
)(Container);