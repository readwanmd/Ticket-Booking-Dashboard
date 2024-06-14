import { api } from './index';

const API_URL = '/events';

const getEvents = async () => {
	const response = await api.get(API_URL);
	return response.data;
};

const createEvent = async (eventData) => {
	const response = await api.post(API_URL, eventData);
	return response.data;
};

const getEventById = async (id) => {
	const response = await api.get(`${API_URL}/${id}`);
	return response.data;
};

export { createEvent, getEventById, getEvents };
