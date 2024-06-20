import { api } from './index';

const API_URL = '/bookings';

const getBookings = async () => {
	const response = await api.get(API_URL);
	return response.data;
};

const getUserBookings = async (userId) => {
	const response = await api.get(`${API_URL}/user/${userId}`);

	return response.data;
};

const createBooking = async (bookingData) => {
	const response = await api.post(API_URL, bookingData);
	return response.data;
};

export { createBooking, getBookings, getUserBookings };
