const ADD_MESSAGE = 'ADD-MESSAGE';

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
	]
};

const dialogsReducer = (state = initialState, action) => {
	const { type } = action;

	switch(type) {
		case ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, {id: '4', message: action.newMessage}]
			};
		default:
			return {...state};	
	}
}

export default dialogsReducer;

export const addMessageActionCreator = (newMessage) => ({type: ADD_MESSAGE, newMessage});