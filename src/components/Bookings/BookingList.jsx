import { useEffect, useState } from 'react';
import { getBookings } from '../../api/bookings';

const BookingList = () => {
	const [bookings, setBookings] = useState([]);
	const [sortDirection, setSortDirection] = useState('asc');

	useEffect(() => {
		const fetchBookings = async () => {
			const data = await getBookings();
			setBookings(data);
		};

		fetchBookings();
	}, []);

	const handleSort = () => {
		const direction = sortDirection === 'asc' ? 'desc' : 'asc';
		const sortedBookings = [...bookings].sort((a, b) => {
			if (direction === 'asc') {
				return a._id.localeCompare(b._id);
			} else {
				return b._id.localeCompare(a._id);
			}
		});
		setBookings(sortedBookings);
		setSortDirection(direction);
	};

	return (
		<div className="overflow-x-hidden">
			<h2 className="text-4xl mb-4 font-semibold">Bookings</h2>
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-white border-b">
						<tr>
							<th
								scope="col"
								className="text-sm font-medium text-gray-900 px-6 py-4 text-left cursor-pointer"
								onClick={handleSort}
							>
								# {sortDirection === 'asc' ? ' ▲' : ' ▼'}
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
							<tr
								key={booking._id}
								className="bg-gray-100 border-b even:bg-gray-4000 odd:bg-gray-200 "
							>
								<td className="px-6 py-4 whitespace-nowrap text-black text-sm font-medium">
									{sortDirection === 'asc'
										? index + 1
										: bookings.length - index}
								</td>
								<td className="text-sm  px-6 py-4 whitespace-nowrap text-black">
									{booking.event.name}
								</td>
								<td className="text-sm px-6 py-4 whitespace-nowrap text-black">
									{new Date(booking.event.date).toLocaleString()}
								</td>
								<td className="text-sm px-6 py-4 whitespace-nowrap text-black">
									{booking.tickets}
								</td>
								<td className="text-sm px-6 py-4 whitespace-nowrap text-black">
									{booking.user.name}
								</td>
								<td className="text-sm px-6 py-4 whitespace-nowrap text-black">
									{booking.paymentStatus}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BookingList;
