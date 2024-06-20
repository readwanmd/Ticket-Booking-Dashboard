/* eslint-disable react/prop-types */

import { Link, useNavigate } from 'react-router-dom';
import useEvent from '../../hooks/useEvent';

const EventCard = ({ event }) => {
	const navigate = useNavigate();

	const { setEvent } = useEvent();
	const handleBooking = (event) => {
		setEvent(event);
		navigate('/book-event');
	};

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{event.name}</div>
				<p className="text-gray-700 text-base">{event.description}</p>
				<p className="text-gray-600 text-sm mt-2">
					Date: {new Date(event.date).toLocaleString()}
				</p>
				<p className="text-gray-600 text-sm">
					Price: {event.price > 0 ? `$${event.price}` : 'Free'}
				</p>
				<p className="text-gray-600 text-sm">Capacity: {event.capacity}</p>
				<p className="text-gray-600 text-sm">
					Tickets Sold: {event.ticketsSold}
				</p>
			</div>
			<div className="px-6 py-4 flex justify-between">
				<Link
					to={`/event/${event._id}`}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					View Event Details
				</Link>
				<Link
					to={'/book-event'}
					onClick={() => handleBooking(event)}
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
				>
					Book Event
				</Link>
			</div>
		</div>
	);
};

export default EventCard;
