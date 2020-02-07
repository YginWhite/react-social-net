import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/dialogsReducer'
import {connect} from 'react-redux';
import withAuthRedirect from './../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
	return {
		newMessageText: state.dialogsPage.newMessageText,
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch( addMessageActionCreator() );
		},

		changeMessage: (text) => {
			dispatch( updateNewMessageTextActionCreator(text) );
		}
	};
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
DialogsContainer = withAuthRedirect(DialogsContainer);

export default DialogsContainer;