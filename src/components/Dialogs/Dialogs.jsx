import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import style from './Dialogs.module.css';
import {reduxForm, Field} from 'redux-form';

const Dialogs = (props) => {
	let dialogs = props.dialogs.map(({id, name}) => <DialogItem key={id} name={name} id={id}/>);
	let messages = props.messages.map(({id, message}) => <Message key={id} message={message}/>);

	const onAddNewMessage = (formData) => {
		props.addMessage(formData.newMessage);
	}

	return (
		<div className={style.dialogs_container}>
			<div id="welcome">
				<div className="title">
					<h2>Dialogs</h2>
					<span className="byline">Talk about everything</span>
				</div>
			</div>

			<div className={style.dialogs}>
				<div className={style.dialogs_participant}>
					{dialogs}
				</div>
				<div className={style.dialogs_messages}>
					<div>
						{messages}
					</div>
					<MessageForm onSubmit={onAddNewMessage} />
				</div>
			</div>
		</div>
	);
}

let MessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={style.dialogs_messages_add}>
			<div>
				<Field name="newMessage" component="textarea" cols="50" rows="5" placeholder="write new message..."/>
			</div>
			<div>
				<button className="button">
					<span className="fa fa-pencil"></span>
					<span>Add Message</span>
				</button>
			</div>
		</form>
	);
};

MessageForm = reduxForm({form: 'dialogAddMessage'})(MessageForm);

export default Dialogs;