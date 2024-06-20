import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserBookings } from '../../api/bookings';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
	const [bookings, setBookings] = useState([]);
	const { user } = useAuth();

	useEffect(() => {
		const fetchBookings = async () => {
			if (user && user.id) {
				const data = await getUserBookings(user.id);
				setBookings(data);
			}
		};

		fetchBookings();
	}, [user]);

	return (
		<>
			<div className="overflow-x-hidden">
				<h2 className="text-4xl mb-4 font-semibold">My Bookings</h2>
				<div>
					{bookings.length ? (
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
											{index + 1}
										</td>
										<td className="text-sm px-6 py-4 whitespace-nowrap text-black">
											{booking.event.name}
										</td>
										<td className="text-sm px-6 py-4 whitespace-nowrap text-black">
											{new Date(booking.event.date).toLocaleString()}
										</td>
										<td className="text-sm px-6 py-4 whitespace-nowrap text-black">
											{booking.tickets}
										</td>
										<td className="text-sm px-6 py-4 whitespace-nowrap text-black">
											{booking.paymentStatus}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<div className="text-center mt-8 mb-20">
							<p className="text-xl mb-4">No bookings yet!</p>
							<Link
								to="/events"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							>
								Browse Events
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default MyBookings;
