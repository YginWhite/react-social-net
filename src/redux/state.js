import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: '1', like: '5', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste aliquid, accusantium aliquam fugiat voluptates nihil natus ipsam, voluptate qui esse fuga corrupti quas unde a, possimus eum! Molestias, saepe, tempore.'},
				{id: '2', like: '15', message: 'what is that?'},
				{id: '3', like: '25', message: 'It is automatic fill when need some text'},
				{id: '4', like: '3', message: 'Thanks, now and i know about it!'},
				{id: '5', like: '10', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sed explicabo similique! Consequuntur magnam, et nostrum id possimus hic quibusdam ipsum alias iusto, eos consequatur aut quasi suscipit eum porro.'}
			],
			newPostText: 'type message ...'
		},

		dialogsPage: {
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
		},

		navbar: {
			friends: [
				{name: 'Ivan'},
				{name: 'Sara'},
				{name: 'Timofey'}
			]
		}
	},

	_callSubscriber() {
		console.log('state was updated');
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.navbar = navbarReducer(this._state.navbar, action);

		this._callSubscriber(this._state);
	}
};

export default store;

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