import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/dialogsReducer'

const DialogsContainer = (props) => {
	const state = props.store.getState();
	const { dialogsPage: {dialogs, messages, newMessageText} } = state;

	const onAddMessage = () => {
		props.store.dispatch( addMessageActionCreator() );
	};

	const onMessageChange = (text) => {
		props.store.dispatch( updateNewMessageTextActionCreator(text) );
	};

	return (
		<Dialogs newMessageText={newMessageText}
				 dialogs={dialogs}
				 messages={messages}
				 addMessage={onAddMessage}
				 changeMessage={onMessageChange} />
	);
}

export default DialogsContainer;