import {profileAPI} from './../api/api';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const RESET_USER_PROFILE = 'profile/RESET_USER_PROFILE';

const initialState = {
	posts: [
		{id: '1', like: '5', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquid, accusantium aliquam fugiat voluptates nihil natus ipsam, voluptate qui esse fuga corrupti quas unde a, possimus eum! Molestias, saepe, tempore.'},
		{id: '2', like: '15', message: 'what is that?'},
		{id: '3', like: '25', message: 'It is automatic fill when need some text'},
		{id: '4', like: '3', message: 'Thanks, now and i know about it!'},
		{id: '5', like: '10', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sed explicabo similique! Consequuntur magnam, et nostrum id possimus hic quibusdam ipsum alias iusto, eos consequatur aut quasi suscipit eum porro.'}
	],
	profile: null,
	status: ''
};

const profile = (state = initialState, action) => {
	const { type } = action;

	switch(type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, {id: '6', like: '0', message: action.newPostText}]
			};
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };
		case SET_STATUS:
			return { ...state, status: action.status };
		case RESET_USER_PROFILE:
			return { ...state, profile: null }
		default:
			return {...state};

	}
};

export default profile;


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const resetUserProfile = () => ({type: RESET_USER_PROFILE});
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});


export const getProfile = (userId) => {
	return async (dispatch) => {
		dispatch( resetUserProfile() );
		const data = await profileAPI.getProfile(userId);
		dispatch(setUserProfile(data));
	};
};

export const getStatus = (userId) => {
	return async (dispatch) => {
		const data = await profileAPI.getStatus(userId);
		dispatch(setStatus(data));
	};
};

export const changeStatus = (status) => {
	return async (dispatch) => {
		const data = await profileAPI.changeStatus(status);
		if (data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	};
};