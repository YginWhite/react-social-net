import * as axios from 'axios';

const instance = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: {
		"API-KEY": 'e5d1f936-1a42-40a4-a370-b6ac01f1ff1d'
	}
});

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
	},

	followUser(userId) {
		return instance.post(`follow/${userId}`).then(response => response.data);
	},

	unfollowUser(userId) {
		return instance.delete(`unfollow/${userId}`).then(response => response.data);
	}
};

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data);
	}
};

export const authAPI = {
	authMe() {
		return instance.get(`auth/me`).then(response => response.data);
	}
};

