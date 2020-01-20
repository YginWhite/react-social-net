const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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
			return state

		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;

	}
};

export default profileReducer;