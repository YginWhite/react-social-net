import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/dialogsReducer'

const Dialogs = (props) => {
	let dialogs = props.dialogs.map(({id, name}) => <DialogItem key={id} name={name} id={id}/>);
	let messages = props.messages.map(({id, message}) => <Message key={id} message={message}/>);

	let textareaRef = React.createRef();
	const addMessage = () => {
		props.addMessage();
	}

	const changeMessage = () => {
		const text = textareaRef.current.value;
		props.changeMessage(text);
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
								  value={props.newMessageText}
								  onChange={changeMessage}/>
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