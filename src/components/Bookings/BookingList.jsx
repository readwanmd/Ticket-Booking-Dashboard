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
		<div className="overflow-x-hidden">
			<h2 className="text-4xl mb-4 font-semibold">Bookings</h2>
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-white border-b">
						<tr>
							<th
								scope="col"
								className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
							>
								#
							</th>
							<th
								scope="col"
								className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
							>
								Event
							</th>
							<th
								scope="col"
								className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
							>
								Date
							</th>
							<th
								scope="col"
								className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
							>
								Tickets
							</th>
							<th
								scope="col"
								className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
							>
								Booked By
							</th>

							<th
								scope="col"
								className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
							>
								Payment Status
							</th>
						</tr>
					</thead>
					<tbody>
						{bookings.map((booking, index) => (
							<tr key={booking._id} className="bg-gray-100 border-b">
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									{index + 1}
								</td>
								<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
									{booking.event.name}
								</td>
								<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
									{booking.event.date}
								</td>
								<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
									{booking.tickets}
								</td>
								<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
									{booking.user.name}
								</td>
								<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
									{booking.paymentStatus}
								</td>
							</tr>
							// <div
							// 	key={booking._id}
							// 	className="p-4 border border-gray-400 rounded"
							// >
							// 	{JSON.stringify(booking)}
							// 	<h3 className="text-xl">{booking.event.title}</h3>
							// 	<p>Tickets: {booking.tickets}</p>
							// 	<p>Total Cost: ${booking.totalCost}</p>
							// </div>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BookingList;
