import { api } from './index';

const API_URL = '/auth';

const register = async (userData) => {
	const response = await api.post(`${API_URL}/register`, userData);
	return response.data;
};

const login = async (userData) => {
	console.log(userData);
	const response = await api.post(`${API_URL}/login`, userData);
	return response.data;
};

export { login, register };
