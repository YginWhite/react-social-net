const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
	users: [
	/*
		{id: 1, followed: true, fullName: 'Bob Jonson', status: 'I am free ...', location: {city: 'Texas', country: 'USA'}},
		{id: 2, followed: true, fullName: 'Itan Lin', status: 'Open your mind', location: {city: 'London', country: 'GB'}},
		{id: 3, followed: false, fullName: 'Sara Star', status: 'Cat is good', location: {city: 'Paris', country: 'France'}},
		{id: 4, followed: true, fullName: 'Kan Brian', status: 'Chess forevar', location: {city: 'Munhen', country: 'Germany'}}
	*/	
	]
};

const usersReducer = (state = initialState, action) => {
	switch(action.type) {
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
		case SET_USERS:
			return { ...state, users: [...state.users, ...action.users] };
		default:
			return state;
	}
};

export default usersReducer;

export const followActionCreator = (userId) => {
	return { type: FOLLOW, userId };
};

export const unfollowActionCreator = (userId) => {
	return { type: UNFOLLOW, userId };
};

export const setUsersActionCreator = (users) => {
	return { type: SET_USERS, users };
};