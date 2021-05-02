import { usersAPI } from './../api/api';


const SET_USERS = 'users/SET_USERS';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';


const initialState = {
	users: [],
	totalCount: 0
};


const setUsers = (users) => ({ type: SET_USERS, users });
const setTotalCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
const followSuccess = (userId) => ({ type: FOLLOW, userId });
const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });


const updateObjectsInArray = (data, newValues, comparisonProp, comparisonValue) => {
	return data.map(o => {
		if ( o[comparisonProp] === comparisonValue ) return { ...o, ...newValues };
		return o;
	});
};


export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USERS:
			return { ...state, users: action.users };
		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalCount: action.totalCount };
		case FOLLOW:
			return {
				...state,
				users: updateObjectsInArray(state.users, {followed: true}, 'id', action.userId)
			};
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectsInArray(state.users, {followed: false}, 'id', action.userId)
			};
		default:
			return state;
	}
};


const userMethod = (userId, apiMethod, dispatchMethod) =>
	async (dispatch) => {
		const data = await apiMethod(userId);
		if (data.resultCode === 0) {
			dispatch(dispatchMethod(userId));
		}
	};

export const getUsers = (page, count) => 
	async (dispatch) => {
		const data = await usersAPI.getUsers(page, count);
		dispatch( setUsers(data.items) );
		dispatch( setTotalCount(data.totalCount) );
	};

export const follow = (userId) => userMethod(userId, usersAPI.followUser, followSuccess);

export const unfollow = (userId) => userMethod(userId, usersAPI.unfollowUser, unfollowSuccess);