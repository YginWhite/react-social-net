import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/state'

const Dialogs = (props) => {
	let dialogs = props.dialogsPage.dialogs.map(({id, name}) => <DialogItem key={id} name={name} id={id}/>);
	let messages = props.dialogsPage.messages.map(({id, message}) => <Message key={id} message={message}/>);

	let textareaRef = React.createRef();
	const addMessage = () => {
		props.dispatch( addMessageActionCreator() );
	}

	const onMassageChange = () => {
		const text = textareaRef.current.value;
		props.dispatch( updateNewMessageTextActionCreator(text) );
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogs}
			</div>
			<div>
				<div className={classes.messages}>
					{messages}
				</div>
				<div className={classes.addMessage}>
					<div>
						<textarea ref={textareaRef} 
								  cols="50" rows="5"
								  value={props.dialogsPage.newMessageText}
								  onChange={onMassageChange}/>
					</div>
					<div>
						<button onClick={addMessage}>Add message</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;