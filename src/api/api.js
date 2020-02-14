import * as axios from 'axios';

const instance = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: {
		"API-KEY": '5ab613ec-74ca-4283-b371-8eca2ad53e53'
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
		return instance.delete(`follow/${userId}`).then(response => response.data);
	}
};

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data);
	},

	getStatus(userId) {
		return instance.get(`profile/status/${userId}`).then(response => response.data);
	},

	changeStatus(status) {
		return instance.put(`profile/status`, { status }).then(response => response.data);
	}
};

export const authAPI = {
	authMe() {
		return instance.get(`auth/me`).then(response => response.data);
	}
};

