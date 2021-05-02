import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import profile from './profileReducer';
import dialogsReducer from './dialogsReducer';
import users from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';


let reducers = combineReducers({
	profile: profile,
	dialogsPage: dialogsReducer,
	users: users,
	auth: authReducer,
	app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;