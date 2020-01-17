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
		const { type } = action;

		if (type === 'ADD-POST') {
			let newPost = {
				id: '6',
				like: '0',
				message: this._state.profilePage.newPostText
			};

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber();

		} else if (type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber();

		} else if (type === 'ADD-MESSAGE') {
			let newMessage = {
				id: '4',
				message: this._state.dialogsPage.newMessageText
			};

			this._state.dialogsPage.messages.push(newMessage);
			this._state.dialogsPage.newMessageText = '';
			this._callSubscriber();

		} else if (type === 'UPDATE-NEW-MESSAGE-TEXT') {
			this._state.dialogsPage.newMessageText = action.newText;
			this._callSubscriber();
		}
	},

	addPost() {
		let newPost = {
			id: '6',
			like: '0',
			message: this._state.profilePage.newPostText
		};

		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber();
	},

	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber();
	},

	addMessage() {
		let newMessage = {
			id: '4',
			message: this._state.dialogsPage.newMessageText
		};

		this._state.dialogsPage.messages.push(newMessage);
		this._state.dialogsPage.newMessageText = '';
		this._callSubscriber();
	},

	updateNewMessageText(newText) {
		this._state.dialogsPage.newMessageText = newText;
		this._callSubscriber();
	}
};

export default store;

export const addPostActionCreator = () => {
	return {
		type: 'ADD-POST'
	};
};

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: 'UPDATE-NEW-POST-TEXT',
		newText: text
	}
};

export const addMessageActionCreator = () => {
	return {
		type: 'ADD-MESSAGE'
	};
};

export const updateNewMessageTextActionCreator = (text) => {
	return {
		type: 'UPDATE-NEW-MESSAGE-TEXT',
		newText: text
	};
};