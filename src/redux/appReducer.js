import { getAuthUserData } from './authReducer.js';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

const initialData = {
	isInitialized: false
};

const appReducer = (state=initialData, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return { ...state, isInitialized: true };
		default:
			return state;
	}
};

export const initializeSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => {
	return async (dispatch) => {
		let promise = dispatch( getAuthUserData() );
		await Promise.all([promise])
		dispatch( initializeSuccess() );
	};
};

export default appReducer;