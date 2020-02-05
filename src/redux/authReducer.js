const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
};

const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_USER_DATA:
			return { ...state, ...action.data, isAuth: true };
		default:
			return state;
	}
};

export default authReducer;

export const setUserAuthData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});