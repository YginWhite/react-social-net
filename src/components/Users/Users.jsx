import React from 'react';

const Users = (props) => {
	if (!props.users.length) {
		props.setUsers(
			[
				{
					id: 1,
					imageURL: "https://img.icons8.com/ios/100/000000/popular-woman.png",
					followed: true, 
					fullName: 'Bob Jonson', 
					status: 'I am free ...', 
					location: {city: 'Texas', country: 'USA'}
				},

				{
					id: 2,
					imageURL: "https://img.icons8.com/ios/100/000000/popular-woman.png",
					followed: true, 
					fullName: 'Itan Lin', 
					status: 'Open your mind', 
					location: {city: 'London', 
					country: 'GB'}
				},

				{
					id: 3,
					imageURL: "https://img.icons8.com/ios/100/000000/popular-woman.png",
					followed: false, 
					fullName: 'Sara Star', 
					status: 'Cat is good', 
					location: {city: 'Paris', 
					country: 'France'}
				},

				{
					id: 4,
					imageURL: "https://img.icons8.com/ios/100/000000/popular-woman.png",
					followed: true, 
					fullName: 'Kan Brian', 
					status: 'Chess forevar', 
					location: {city: 'Munhen', country: 'Germany'}
				}
			]
		);
	}

	return (
		<div>
			{props.users.map((user) => {
				return (
					<div key={user.id}>
						<figure>
							<p>
								<img src={user.imageURL}/>
							</p>	
							<figcaption>{user.fullName}</figcaption>
						</figure>
						<ul>
							<li>{user.location.country}</li>
							<li>{user.location.city}</li>
							<li>{user.status}</li>
						</ul>
						<div>
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