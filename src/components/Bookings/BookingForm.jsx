import { useState } from 'react';
import { createBooking } from '../../api/bookings';
import useAuth from '../../hooks/useAuth';
import useEvent from '../../hooks/useEvent';

const BookingForm = () => {
	const { event } = useEvent();

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
			await createBooking(bookingData);
			alert('Booking successful!');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">
					Tickets
				</label>
				<input
					type="number"
					value={tickets}
					onChange={(e) => setTickets(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					required
					min="1"
					max={event.capacity - event.ticketsSold}
				/>
			</div>
			<div className="flex items-center justify-between">
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Book Now
				</button>
			</div>
		</form>
	);
};

export default BookingForm;
