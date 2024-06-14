import axios from 'axios';

export const api = axios.create({
	baseURL: import.meta.env.VITE_SERVER_BASE_URL,
});

api.interceptors.request.use(
	(config) => {
		const user = localStorage.getItem('user');
		console.log(JSON.parse(user).token);
		if (user) {
			config.headers['Authorization'] = `Bearer ${JSON.parse(user).token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
