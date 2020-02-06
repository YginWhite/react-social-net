import {profileAPI} from './../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
	posts: [
		{id: '1', like: '5', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquid, accusantium aliquam fugiat voluptates nihil natus ipsam, voluptate qui esse fuga corrupti quas unde a, possimus eum! Molestias, saepe, tempore.'},
		{id: '2', like: '15', message: 'what is that?'},
		{id: '3', like: '25', message: 'It is automatic fill when need some text'},
		{id: '4', like: '3', message: 'Thanks, now and i know about it!'},
		{id: '5', like: '10', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sed explicabo similique! Consequuntur magnam, et nostrum id possimus hic quibusdam ipsum alias iusto, eos consequatur aut quasi suscipit eum porro.'}
	],
	newPostText: 'type message ...',
	profile: null
};

const profileReducer = (state = initialState, action) => {
	const { type } = action;
	let stateCopy;

	switch(type) {
		case ADD_POST:
			let newPost = {
				id: '6',
				like: '0',
				message: state.newPostText
			};

			stateCopy = {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			};
			return stateCopy;

		case UPDATE_NEW_POST_TEXT:
			stateCopy = {
				...state,
				newPostText: action.newText
			};
			return stateCopy;
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };
		default:
			stateCopy = {...state};
			return stateCopy;

	}
};

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getProfile = (userId) => {
	return (dispatch) => {
		profileAPI.getProfile(userId)
				.then(data => {
					dispatch(setUserProfile(data));
				});
	};
};

