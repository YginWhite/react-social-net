import React from 'react';
import clss from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			 .then(response => {
			 	this.props.setUsers(response.data.items);
			 	this.props.setUsersCount(response.data.totalCount);
			 });
	}

	changePage(pageNumber) {
		this.props.setPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			 .then(response => {
			 	this.props.setUsers(response.data.items);
			 });
	}

	changeButtonsRange(step, direction, pagesAmount) {
		this.props.changePagesRange(step, direction, pagesAmount);
	}

	render() {
		const defaultImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59F9C4DK6066H7NHNgZZXg_gxBbCEfE4ta9enVNq1953lDO4Qg&s`;
		
		const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		const pages = Array(pagesCount).fill(1);

		const buttonsRange = this.props.currentPagesRange;
		const buttonsCount = this.props.currentPagesCount;
		const currentPage = this.props.currentPage;

		return (
			<div className={clss.users}>
				<div className={clss.users_pagination}>
					<button onClick={(e) => {this.changeButtonsRange(buttonsCount, '<', pagesCount)}}>{'<'}</button>
					{pages.map((p, i) => {
						const n = i + 1;
						let cls = this.props.currentPage === n ? clss.users_pagination_btn__curr : '';
						if (n < buttonsRange[0] || n > buttonsRange[1]) return null;
						return (
							<span key={n} 
								  className={`${clss.users_pagination_btn} ${cls}`}
								  onClick={(e) => {this.changePage(n)}}
							>
								{n}
							</span>
						);
					})}
					<button onClick={(e) => {this.changeButtonsRange(buttonsCount, '>', pagesCount)}}>{'>'}</button>
				</div>

				{this.props.users.map((user) => {
					return (
						<div key={user.id} className={clss.users_user}>
							<figure className={clss.users_user_pict}>
								<p>
									{user.photos.small ? <img src={user.photos.small}/> :
														 <img src={defaultImg}/>}
								</p>	
								<figcaption>{user.fullName ? user.fullName : user.name}</figcaption>
							</figure>
							<ul className={clss.users_user_list}>
								<li><span>Country: </span>{"user.location.country"}</li>
								<li><span>City: </span>{"user.location.city"}</li>
								<li><span>Status: </span>{user.status}</li>
							</ul>
							<div className={clss.users_user_btn}>
								{user.followed ? 
									<button onClick={() => {this.props.unfollow(user.id)}}>unfollow</button> : 
									<button onClick={() => {this.props.follow(user.id)}}>follow</button>}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Users;