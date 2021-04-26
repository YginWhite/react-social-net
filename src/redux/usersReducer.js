import { usersAPI } from './../api/api';

const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
	users: [],
	totalCount: 0
};

const setUsers = (users) => ({ type: SET_USERS, users });
const setTotalCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USERS:
			return { ...state, users: action.users };
		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalCount: action.totalCount };
		default:
			return state;
	}
}

export const getUsers = (page, count) => (dispatch) => {
	return usersAPI.getUsers(page, count)
		.then(data => {
			setUsers(data.items);
			setTotalCount(data.totalCount);
		});
};

// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const SET_USERS = 'SET-USERS';
// const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
// const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
// const CHANGE_PAGES_RANGE = 'CHANGE-PAGES-RANGE';
// const TOGGLE_IS_FATCHING = 'TOGGLE-IS-FATCHING';
// const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

// const initialState = {
// 	users: [],
// 	pageSize: 4,
// 	totalUsersCount: 0,
// 	currentPage: 1,
// 	currentPagesCount: 10,
// 	currentPagesRange: [1, 10],
// 	isFetching: false,
// 	followingUsersInProgress: [1, 2, 3]

// };

// const usersReducer = (state = initialState, action) => {
// 	switch(action.type) {
// 		case FOLLOW:
// 			return {
// 				...state,
// 				users: state.users.map(user => {
// 					if (user.id === action.userId) {
// 						return { ...user, followed: true };
// 					} else {
// 						return user;
// 					}
// 				})
// 			};
// 		case UNFOLLOW:
// 			return {
// 				...state,
// 				users: state.users.map(user => {
// 					if (user.id === action.userId) {
// 						return { ...user, followed: false };
// 					} else {
// 						return user;
// 					}
// 				})
// 			};
// 		case SET_USERS:
// 			return { ...state, users: action.users };
// 		case SET_CURRENT_PAGE:
// 			return { ...state, currentPage: action.page };
// 		case SET_TOTAL_USERS_COUNT:
// 			return { ...state, totalUsersCount: action.count };
// 		case CHANGE_PAGES_RANGE:
// 			const range = state.currentPagesRange;
// 			return { 
// 				...state,
// 				currentPagesRange: (function () {
// 					if (action.direction === '>') {
// 						if (range[1] >= action.pagesAmount) return [...range];
// 						return [ range[0] += action.step,
// 								 range[1] += action.step ];
// 					} else {
// 						if (range[0] === 1) return [1, action.step];
// 						else return [ range[0] -= action.step,
// 								      range[1] -= action.step ];
// 					}
// 				})()
// 			};
// 		case TOGGLE_IS_FATCHING:
// 			return { ...state, isFetching: action.isFetching };
// 		case TOGGLE_FOLLOWING:
// 			return {
// 				...state, 
// 				followingUsersInProgress: action.isFetching
// 					? [...state.followingUsersInProgress, action.userId]
// 					: state.followingUsersInProgress.filter(id => id !== action.userId)
// 				};
// 		default:
// 			return state;
// 	}
// };

// export default usersReducer;

// export const followSuccess = (userId) => ({ type: FOLLOW, userId });
// export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
// export const setUsers = (users) => ({ type: SET_USERS, users });
// export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
// export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
// export const changePagesRange = (step, direction, pagesAmount) => ({type: CHANGE_PAGES_RANGE, step, direction, pagesAmount});
// export const toggleIsFatching = (isFetching) => ({type: TOGGLE_IS_FATCHING, isFetching});
// export const toggleFollowing = (isFetching, userId) => ({type: TOGGLE_FOLLOWING, isFetching, userId});

// export const getUsers = (currentPage, pageSize) => {
// 	return (dispatch) => {
// 		dispatch(toggleIsFatching(true));
// 		usersAPI.getUsers(currentPage, pageSize)
// 				.then(data => {
// 					dispatch(setUsers(data.items));
// 					dispatch(setTotalUsersCount(data.totalCount));
// 					dispatch(toggleIsFatching(false));
// 				});
// 	};
// };

// export const changePage = (pageNumber, pageSize) => {
// 	return (dispatch) => {
// 		dispatch(setCurrentPage(pageNumber));
// 		dispatch(toggleIsFatching(true));
// 		usersAPI.getUsers(pageNumber, pageSize)
// 				.then(data => {
// 					dispatch(setUsers(data.items));
// 			 		dispatch(toggleIsFatching(false));
// 				});
// 	};
// };

// export const follow = (userId) => {
// 	return (dispatch) => {
// 	  	dispatch(toggleFollowing(true, userId));
// 		usersAPI.followUser(userId).then(data => {
// 			if (data.resultCode === 0) {
// 				dispatch(followSuccess(userId));
// 			}
// 			dispatch(toggleFollowing(false, userId));
// 		});
// 	};
// };

// export const unfollow = (userId) => {
// 	return (dispatch) => {
//   	  	dispatch(toggleFollowing(true, userId));
//   		usersAPI.unfollowUser(userId).then(data => {
//   			if (data.resultCode === 0) {
//   				dispatch(unfollowSuccess(userId));
//   			}
//   			dispatch(toggleFollowing(false, userId));
//   		});
// 	};
// };