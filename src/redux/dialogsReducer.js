const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
	const { type } = action;

	if (type === ADD_MESSAGE) {
		let newMessage = {
			id: '4',
			message: state.newMessageText
		};

		state.messages.push(newMessage);
		state.newMessageText = '';

	} else if (type === UPDATE_NEW_MESSAGE_TEXT) {
		state.newMessageText = action.newText;
	}

	return state;
}

export default dialogsReducer;