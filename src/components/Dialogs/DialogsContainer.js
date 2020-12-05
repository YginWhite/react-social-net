import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/dialogsReducer'
import {connect} from 'react-redux';
import withAuthRedirect from './../hoc/withAuthRedirect';
import {compose} from 'redux';

const mapStateToProps = (state) => {
	return {
		newMessageText: state.dialogsPage.newMessageText,
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: (newMessage) => {
			dispatch( addMessageActionCreator(newMessage) );
		}
	};
};


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);