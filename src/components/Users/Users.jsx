import React from 'react';
import clss from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {
	componentDidMount() {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
			 .then(response => {
			 	this.props.setUsers(response.data.items);
			 });
	}

	render() {
		const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59F9C4DK6066H7NHNgZZXg_gxBbCEfE4ta9enVNq1953lDO4Qg&s";
		
		return (
			<div className={clss.users}>
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