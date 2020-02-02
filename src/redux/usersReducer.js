const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const CHANGE_PAGES_RANGE = 'CHANGE-PAGES-RANGE';
const TOGGLE_IS_FATCHING = 'TOGGLE-IS-FATCHING';

const initialState = {
	users: [
		/*{
			id: 1,
			imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59F9C4DK6066H7NHNgZZXg_gxBbCEfE4ta9enVNq1953lDO4Qg&s",
			followed: true, 
			fullName: 'Bob Jonson', 
			status: 'I am free ...', 
			location: {city: 'Texas', country: 'USA'}
		},

		{
			id: 2,
			imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59F9C4DK6066H7NHNgZZXg_gxBbCEfE4ta9enVNq1953lDO4Qg&s",
			followed: true, 
			fullName: 'Itan Lin', 
			status: 'Open your mind', 
			location: {city: 'London', 
			country: 'GB'}
		},

		{
			id: 3,
			imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59F9C4DK6066H7NHNgZZXg_gxBbCEfE4ta9enVNq1953lDO4Qg&s",
			followed: false, 
			fullName: 'Sara Star', 
			status: 'Cat is good', 
			location: {city: 'Paris', 
			country: 'France'}
		},

		{
			id: 4,
			imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS59F9C4DK6066H7NHNgZZXg_gxBbCEfE4ta9enVNq1953lDO4Qg&s",
			followed: true, 
			fullName: 'Kan Brian', 
			status: 'Chess forevar', 
			location: {city: 'Munhen', country: 'Germany'}
		}*/
	],

	pageSize: 4,
	totalUsersCount: 0,
	currentPage: 5,
	currentPagesCount: 10,
	currentPagesRange: [1, 10],
	isFetching: false
};

const usersReducer = (state = initialState, action) => {
	switch(action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: true };
					} else {
						return user;
					}
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: false };
					} else {
						return user;
					}
				})
			};
		case SET_USERS:
			return { ...state, users: action.users };
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.page };
		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.count };
		case CHANGE_PAGES_RANGE:
			const range = state.currentPagesRange;
			return { 
				...state,
				currentPagesRange: (function () {
					if (action.direction === '>') {
						if (range[1] >= action.pagesAmount) return [...range];
						return [ range[0] += action.step,
								 range[1] += action.step ];
					} else {
						if (range[0] === 1) return [1, action.step];
						else return [ range[0] -= action.step,
								      range[1] -= action.step ];
					}
				})()
			};
		case TOGGLE_IS_FATCHING:
			return { ...state, isFetching: action.isFetching };
		default:
			return state;
	}
};

export default usersReducer;

export const followActionCreator = (userId) => {
	return { type: FOLLOW, userId };
};

export const unfollowActionCreator = (userId) => {
	return { type: UNFOLLOW, userId };
};

export const setUsersActionCreator = (users) => {
	return { type: SET_USERS, users };
};

export const setCurrentPageActionCreator = (page) => {
	return { type: SET_CURRENT_PAGE, page };
};

export const setTotalUsersCountActionCreator = (count) => {
	return {type: SET_TOTAL_USERS_COUNT, count};
};

export const changePagesRangeActionCreator = (step, direction, pagesAmount) => {
	return {type: CHANGE_PAGES_RANGE, step, direction, pagesAmount};
}

export const toggleIsFatchingActionCreator = (isFetching) => {
	return {type: TOGGLE_IS_FATCHING, isFetching};
};