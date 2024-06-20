import { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { makePayment } from '../api/payment';
import useAuth from '../hooks/useAuth';
import useEvent from '../hooks/useEvent';

const PaymentPage = () => {
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();
	const [tickets, setTickets] = useState(1);
	const [totalPrice, setTotalPrice] = useState(0);
	const [bookingId, setBookingId] = useState(null);

	const { event } = useEvent();

	const { user } = useAuth();
	const [cardNumber, setCardNumber] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [cvv, setCvv] = useState('');
	const [cardHolderName, setCardHolderName] = useState('');

	useEffect(() => {
		const ticketsParam = searchParams.get('tickets');
		const priceParam = searchParams.get('price');
		const bookingParans = searchParams.get('bookingid');
		if (ticketsParam && priceParam) {
			setTickets(Number(ticketsParam));
			setTotalPrice(Number(priceParam));
			setBookingId(bookingParans);
		}
	}, [searchParams]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const paymentData = {
				bookingId,
			};
			await makePayment(paymentData);

			alert('Payment successful!');
			navigate('/bookings');
		} catch (error) {
			console.error(error);
			alert('Payment failed. Please try again.');
		}
	};

	return (
		<div>
			<h2 className="text-4xl mb-4 font-semibold">Payment</h2>
			<div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h2 className="text-3xl font-extrabold text-gray-900 mb-4">
							{event.name}
						</h2>

						<div className="mb-4">
							<p className="text-gray-600 text-sm">
								Date: {new Date(event.date).toLocaleString()}
							</p>
							<p className="text-gray-600 text-sm">Price: ${event.price}</p>
							<p className="text-xl font-medium text-gray-700">
								Number of Tickets: {tickets}
							</p>
							<p className="text-xl font-medium text-gray-700">
								Total Price: {`$${totalPrice}`}
							</p>
						</div>
						<form onSubmit={handleSubmit} className="space-y-2">
							<div>
								<label className="block text-xl font-medium text-gray-700 ">
									Card Holder Name
								</label>
								<input
									type="text"
									value={cardHolderName}
									onChange={(e) => setCardHolderName(e.target.value)}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
									required
								/>
							</div>
							<div>
								<label className="block text-xl font-medium text-gray-700 ">
									Card Number
								</label>
								<input
									type="text"
									value={cardNumber}
									onChange={(e) => setCardNumber(e.target.value)}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
									required
								/>
							</div>
							<div>
								<label className="block text-xl font-medium text-gray-700 ">
									Expiry Date
								</label>
								<input
									type="text"
									value={expiryDate}
									onChange={(e) => setExpiryDate(e.target.value)}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
									required
									placeholder="MM/YY"
								/>
							</div>
							<div>
								<label className="block text-xl font-medium text-gray-700">
									CVV
								</label>
								<input
									type="text"
									value={cvv}
									onChange={(e) => setCvv(e.target.value)}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
									required
								/>
							</div>
							<div className="flex items-center justify-between">
								<button
									type="submit"
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								>
									Pay Now
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentPage;
