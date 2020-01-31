import React from 'react';
import clss from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {

	const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59F9C4DK6066H7NHNgZZXg_gxBbCEfE4ta9enVNq1953lDO4Qg&s";

	if (!props.users.length) {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
			 .then(response => {
			 	props.setUsers(response.data.items);
			 });

		
	}

	return (
		<div className={clss.users}>
			{props.users.map((user) => {
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
								<button onClick={() => {props.unfollow(user.id)}}>unfollow</button> : 
								<button onClick={() => {props.follow(user.id)}}>follow</button>}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Users;