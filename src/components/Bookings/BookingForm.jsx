import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBooking } from '../../api/bookings';
import useAuth from '../../hooks/useAuth';
import useEvent from '../../hooks/useEvent';

const BookingForm = () => {
	const { event } = useEvent();
	const navigate = useNavigate();

	const [tickets, setTickets] = useState(1);
	const { user } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const bookingData = {
				eventId: event._id,
				tickets,
				userId: user._id,
			};
			const response = await createBooking(bookingData);
			alert('Booking successful!');

			navigate(
				`/payment?tickets=${tickets}&price=${event.price * tickets}&bookingid=${
					response._id
				}`
			);
		} catch (error) {
			console.error(error);
			alert('Booking failed. Please try again.');
		}
	};

	return (
		<div>
			<h2 className="text-4xl mb-4 font-semibold">Booking Form</h2>
			<div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<h2 className="text-3xl font-extrabold text-gray-900 mb-4">
							{event.name}
						</h2>
						<p className="text-gray-700 text-lg mb-4">{event.description}</p>
						<div className="mb-4">
							<p className="text-gray-600 text-sm">
								Date: {new Date(event.date).toLocaleString()}
							</p>
							<p className="text-gray-600 text-sm">
								Price: {event.price > 0 ? `$${event.price}` : 'Free'}
							</p>
							<p className="text-gray-600 text-sm">
								Capacity: {event.capacity}
							</p>
							<p className="text-gray-600 text-sm">
								Tickets Sold: {event.ticketsSold}
							</p>
						</div>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="mb-4 w-full flex items-center justify-between">
								<label className="w-full block text-xl font-medium text-gray-700 mb-2">
									Number of Tickets:
								</label>
								<input
									type="number"
									value={tickets}
									onChange={(e) => setTickets(e.target.value)}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
									required
									min="1"
									max={event.capacity - event.ticketsSold}
								/>
							</div>

							<div className="flex items-center justify-between">
								<p className="text-gray-600 text-xl font-medium">
									Total Price: ${event.price * tickets}
								</p>
								<button
									type="submit"
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								>
									Book Now
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>{' '}
		</div>
	);
};

export default BookingForm;
