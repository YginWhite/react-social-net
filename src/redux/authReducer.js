import {authAPI} from './../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_SERVER_ERROR =  'SET_SERVER_ERROR';

const initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	serverError: null
};

const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_USER_DATA:
			return { ...state, ...action.data };
		case SET_SERVER_ERROR:
			return { ...state, serverError: action.serverError };
		default:
			return state;
	}
};

export default authReducer;

export const setServerError = (serverError) => ({
	type: SET_SERVER_ERROR,
	serverError
});

export const setUserAuthData = (userId, email, login, isAuth) => (
	{
		type: SET_USER_DATA,
		data: { userId, email, login, isAuth }
	}
);

export const getAuthUserData = () => {
	return (dispatch) => {
		return authAPI.authMe()
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
					dispatch( setServerError(null) );
				} else {
					dispatch( setServerError(data) );
				}
			});
	};
};

export const logout = () => {
	return (dispatch) => {
		authAPI.logout()
			.then(data => {
				//console.log(data, 'from logout');
				if (data.resultCode === 0) {
					dispatch( setUserAuthData(null, null, null, false) );
				}
			});
	};
};


export const selectServerErrorText = state => 
	state.auth.serverError && state.auth.serverError.messages.join(', ');

export const selectServerFieldErrors = state => {
	const fieldsErrors = state.auth.serverError && state.auth.serverError.fieldsErrors;
	if (fieldsErrors && fieldsErrors.length) {
		return fieldsErrors.reduce((acc, current) => {
			acc[current.field] = current.error;
			return acc;
		}, {});
	}
};