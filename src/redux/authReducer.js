import {authAPI} from './../api/api';
import { stopSubmit } from 'redux-form';

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
			return { ...state, ...action.data };
		default:
			return state;
	}
};

export default authReducer;

export const setUserAuthData = (userId, email, login, isAuth) => (
	{
		type: SET_USER_DATA,
		data: { userId, email, login, isAuth }
	}
);

export const getAuthUserData = () => {
	return (dispatch) => {
		authAPI.authMe()
		   .then(data => {
		    	let {id, email, login} = data.data;
		    	if (data.resultCode === 0) {
		    		dispatch( setUserAuthData(id, email, login, true) );
		    	}
		   });
	};
};

export const login = (email, password, rememberMe=false) => {
	return (dispatch) => {
		authAPI.login(email, password, rememberMe)
			.then(data => {
				console.log(data, 'from login');
				if (data.resultCode === 0) {
					dispatch( getAuthUserData() );
				} else {
					let message = data.messages[0] || 'Some error';
					dispatch( stopSubmit('login', {_error: message}) );
				}
			});
	};
};

export const logout = () => {
	return (dispatch) => {
		authAPI.logout()
			.then(data => {
				console.log(data, 'from logout');
				if (data.resultCode === 0) {
					dispatch( setUserAuthData(null, null, null, false) );
				}
			});
	};
};