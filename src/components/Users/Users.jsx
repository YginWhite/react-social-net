import React from 'react';
import clss from './Users.module.css';

const Users = (props) => {
	if (!props.users.length) {
		props.setUsers(
			[
				{
					id: 1,
					imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59F9C4DK6066H7NHNgZZXg_gxBbCEfE4ta9enVNq1953lDO4Qg&s",
					followed: true, 
					fullName: 'Bob Jonson', 
					status: 'I am free ...', 
					location: {city: 'Texas', country: 'USA'}
				},

				{
					id: 2,
					imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59F9C4DK6066H7NHNgZZXg_gxBbCEfE4ta9enVNq1953lDO4Qg&s",
					followed: true, 
					fullName: 'Itan Lin', 
					status: 'Open your mind', 
					location: {city: 'London', 
					country: 'GB'}
				},

				{
					id: 3,
					imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59F9C4DK6066H7NHNgZZXg_gxBbCEfE4ta9enVNq1953lDO4Qg&s",
					followed: false, 
					fullName: 'Sara Star', 
					status: 'Cat is good', 
					location: {city: 'Paris', 
					country: 'France'}
				},

				{
					id: 4,
					imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59F9C4DK6066H7NHNgZZXg_gxBbCEfE4ta9enVNq1953lDO4Qg&s",
					followed: true, 
					fullName: 'Kan Brian', 
					status: 'Chess forevar', 
					location: {city: 'Munhen', country: 'Germany'}
				}
			]
		);
	}

	return (
		<div className={clss.users}>
			{props.users.map((user) => {
				return (
					<div key={user.id} className={clss.users_user}>
						<figure className={clss.users_user_pict}>
							<p>
								<img src={user.imageURL}/>
							</p>	
							<figcaption>{user.fullName}</figcaption>
						</figure>
						<ul className={clss.users_user_list}>
							<li><span>Country: </span>{user.location.country}</li>
							<li><span>City: </span>{user.location.city}</li>
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