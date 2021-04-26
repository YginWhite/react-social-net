import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/usersReducer';

import Users from './Users';

class Container extends React.Component {
	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<div>
				<Users/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	users: state.usersPage.users,
	totalUsers: state.usersPage.totalCount
})

export default compose(
	connect(mapStateToProps, { getUsers })
)(Container);