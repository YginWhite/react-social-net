import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profileReducer'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	const { profilePage: {posts, newPostText} } = state;
	return { posts, newPostText };
};
const mapDispatchToProps = (dispatch) => {
	return {
		addPost() {
			dispatch( addPostActionCreator() );
		},

		updateNewPostText(text) {
			dispatch( updateNewPostTextActionCreator(text) );
		}
	};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;