import MyPosts from './MyPosts';
import { addPostActionCreator } from './../../../redux/profileReducer'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	const { profilePage: {posts} } = state;
	return { posts };
};
const mapDispatchToProps = (dispatch) => {
	return {
		addPost(newPostText) {
			dispatch( addPostActionCreator(newPostText) );
		}
	};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;