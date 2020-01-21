const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
	posts: [
		{id: '1', like: '5', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquid, accusantium aliquam fugiat voluptates nihil natus ipsam, voluptate qui esse fuga corrupti quas unde a, possimus eum! Molestias, saepe, tempore.'},
		{id: '2', like: '15', message: 'what is that?'},
		{id: '3', like: '25', message: 'It is automatic fill when need some text'},
		{id: '4', like: '3', message: 'Thanks, now and i know about it!'},
		{id: '5', like: '10', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sed explicabo similique! Consequuntur magnam, et nostrum id possimus hic quibusdam ipsum alias iusto, eos consequatur aut quasi suscipit eum porro.'}
	],
	newPostText: 'type message ...'
};

const profileReducer = (state = initialState, action) => {
	const { type } = action;

	switch(type) {
		case ADD_POST:
			let newPost = {
				id: '6',
				like: '0',
				message: state.newPostText
			};

			state.posts.push(newPost);
			state.newPostText = '';
			return {...state}

		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return {...state};
		default:
			return {...state};

	}
};

export default profileReducer;

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	};
};

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	}
};