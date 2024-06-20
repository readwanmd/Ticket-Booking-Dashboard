import axios from 'axios';

const API_URL = `${import.meta.env.VITE_SERVER_BASE_URL}/auth`;

const register = async (userData) => {
	const response = await axios.post(`${API_URL}/register`, userData);
	return response.data;
};

const login = async (userData) => {
	// console.log(userData);
	const response = await axios.post(`${API_URL}/login`, userData);
	return response.data;
};

export { login, register };
