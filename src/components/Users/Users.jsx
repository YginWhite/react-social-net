import React from 'react';
import style from './Users.module.css';
import {NavLink} from 'react-router-dom';

const defaultImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59F9C4DK6066H7NHNgZZXg_gxBbCEfE4ta9enVNq1953lDO4Qg&s`;


const Users = (props) => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	const pages = Array(pagesCount).fill(1);

	const buttonsRange = props.currentPagesRange;
	const buttonsCount = props.currentPagesCount;

	return (
		<div>
			<div className="title">
				<h2>Users</h2>
				<span className="byline">Here you can follow user</span>
			</div>

			<div className={style.users_pagination}>
				<button onClick={(e) => {props.changePagesRange(buttonsCount, '<', pagesCount)}}>
					<span className="fa fa-arrow-circle-left"></span>
				</button>

				{pages.map((p, i) => {
					const n = i + 1;
					let cls = props.currentPage === n ? style.users_pagination_btn__curr : '';
					if (n < buttonsRange[0] || n > buttonsRange[1]) return null;
					return (
						<span key={n} 
							  className={`${style.users_pagination_btn} ${cls}`}
							  onClick={(e) => {props.changePage(e, n)}}
						>
							{n}
						</span>
					);
				})}
				<button onClick={(e) => {props.changePagesRange(buttonsCount, '>', pagesCount)}}>
					<span className="fa fa-arrow-circle-right"></span>
				</button>
			</div>

			<div className={style.users}>
				{props.users.map((user) => {
					return (
						<div key={user.id} className={style.users_user}>
							<figure className={style.users_user_pict}>
								<p>
									<NavLink to={`/profile/${user.id}`}>
										{
											user.photos.small 
												? <img alt="userImg" src={user.photos.small}/>
												: <img alt="userImg" src={defaultImg}/>
										}
									</NavLink>
								</p>	
								<figcaption>{user.fullName ? user.fullName : user.name}</figcaption>
							</figure>

							<ul className={style.users_user_list}>
								<li><span>Country: </span>{"user.location.country"}</li>
								<li><span>City: </span>{"user.location.city"}</li>
								<li><span>Status: </span>{user.status}</li>
							</ul>

							<div className={style.users_user_btn}>
								{ 
									user.followed
										? 	<button 
												disabled={ props.followingUsersInProgress.some(id => id === user.id) }
												onClick={ () => props.unfollow(user.id) }
											>
												<span className="fa fa-times"> unfollow</span>
											</button> 

										: 	<button 
												disabled={props.followingUsersInProgress.some(id => id === user.id)}
												onClick={() => props.follow(user.id)}
											>
												<span className="fa fa-user"> follow</span>
											</button> 
								}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Users;