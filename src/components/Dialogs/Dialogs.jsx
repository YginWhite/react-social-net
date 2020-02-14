import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import {reduxForm, Field} from 'redux-form';

const Dialogs = (props) => {
	let dialogs = props.dialogs.map(({id, name}) => <DialogItem key={id} name={name} id={id}/>);
	let messages = props.messages.map(({id, message}) => <Message key={id} message={message}/>);

	const onAddNewMessage = (formData) => {
		props.addMessage(formData.newMessage);
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs_participant}>
				{dialogs}
			</div>
			<div className={classes.dialogs_messages}>
				<div>
					{messages}
				</div>
				<MessageForm onSubmit={onAddNewMessage} />
			</div>
		</div>
	);
}

let MessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={classes.dialogs_messages_add}>
			<div>
				<Field name="newMessage" component="textarea" cols="50" rows="5" placeholder="write new message..."/>
			</div>
			<div>
				<button>Add message</button>
			</div>
		</form>
	);
};

MessageForm = reduxForm({form: 'dialogAddMessage'})(MessageForm);

export default Dialogs;