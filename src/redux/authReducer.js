import {authAPI} from './../api/api';

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

export const getAuthUserData = () => {
	return (dispatch) => {
		authAPI.authMe()
		   .then(data => {
		    	let {id, email, login} = data.data;
		    	if (data.resultCode === 0) {
		    		dispatch(setUserAuthData(id, email, login));
		    	}
		   });
	};
};