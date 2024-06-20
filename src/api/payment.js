import { api } from '.';

const API_URL = '/payments';

const makePayment = async (paymentData) => {
	const response = await api.post(API_URL, paymentData);
	return response.data;
};

export { makePayment };
