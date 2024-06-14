import { useEffect, useState } from 'react';
import { getBookings } from '../../api/bookings';

const BookingList = () => {
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		const fetchBookings = async () => {
			const data = await getBookings();
			setBookings(data);
		};

		fetchBookings();
	}, []);

	return (
		<div>
			<h2 className="text-2xl">Bookings</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
				{bookings.map((booking) => (
					<div key={booking._id} className="p-4 border border-gray-400 rounded">
						<h3 className="text-xl">{booking.event.title}</h3>
						<p>Tickets: {booking.tickets}</p>
						<p>Total Cost: ${booking.totalCost}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default BookingList;
