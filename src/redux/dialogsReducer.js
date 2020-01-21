const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
	dialogs: [
		{name: 'Mark', id: '1'},
		{name: 'John', id: '2'},
		{name: 'Bob', id: '3'},
		{name: 'Richard', id: '4'},
		{name: 'Sara', id: '5'},
		{name: 'Svetlana', id: '6'}
	],
	messages: [
		{message: 'Hello everyone!!!', id: '1'},
		{message: 'Hi, Guys!', id: '2'},
		{message: 'Goodevening all!!!', id: '3'}
	],
	newMessageText: 'write to someone ...'
};

const dialogsReducer = (state = initialState, action) => {
	const { type } = action;

	switch(type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: '4',
				message: state.newMessageText
			};

			state.messages.push(newMessage);
			state.newMessageText = '';
			return {...state};
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newText;
			return {...state};
		default:
			return {...state};	
	}
}

export default dialogsReducer;

export const addMessageActionCreator = () => {
	return {
		type: ADD_MESSAGE
	};
};

export const updateNewMessageTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newText: text
	};
};