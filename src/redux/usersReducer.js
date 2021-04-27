import { usersAPI } from './../api/api';

const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
	users: [],
	totalCount: 0
};

const setUsers = (users) => ({ type: SET_USERS, users });
const setTotalCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
const followSuccess = (userId) => ({ type: FOLLOW, userId });
const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USERS:
			return { ...state, users: action.users };
		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalCount: action.totalCount };
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: true };
					} else {
						return user;
					}
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: false };
					} else {
						return user;
					}
				})
			};
		default:
			return state;
	}
};

export const getUsers = (page, count) => (dispatch) => {
	return usersAPI.getUsers(page, count)
		.then(data => {
			dispatch( setUsers(data.items) );
			dispatch( setTotalCount(data.totalCount) );
		});
};

export const follow = (userId) => {
	return (dispatch) => {
		return usersAPI.followUser(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(followSuccess(userId));
			}
		});
	};
};

export const unfollow = (userId) => {
	return (dispatch) => {
  	return usersAPI.unfollowUser(userId).then(data => {
  		if (data.resultCode === 0) {
  			dispatch(unfollowSuccess(userId));
  		}
  	});
	};
};