import React from 'react';
import clss from './Users.module.css';

const defaultImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59F9C4DK6066H7NHNgZZXg_gxBbCEfE4ta9enVNq1953lDO4Qg&s`;


const Users = (props) => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	const pages = Array(pagesCount).fill(1);

	const buttonsRange = props.currentPagesRange;
	const buttonsCount = props.currentPagesCount;
	const currentPage = props.currentPage;

	return (
		<div className={clss.users}>
			<div className={clss.users_pagination}>
				<button onClick={(e) => {props.changePagesRange(buttonsCount, '<', pagesCount)}}>{'<'}</button>
				{pages.map((p, i) => {
					const n = i + 1;
					let cls = props.currentPage === n ? clss.users_pagination_btn__curr : '';
					if (n < buttonsRange[0] || n > buttonsRange[1]) return null;
					return (
						<span key={n} 
							  className={`${clss.users_pagination_btn} ${cls}`}
							  onClick={(e) => {props.changePage(e, n)}}
						>
							{n}
						</span>
					);
				})}
				<button onClick={(e) => {props.changePagesRange(buttonsCount, '>', pagesCount)}}>{'>'}</button>
			</div>

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