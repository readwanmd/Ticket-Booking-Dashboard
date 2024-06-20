import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getEventById } from '../../api/events';
import useEvent from '../../hooks/useEvent';

const EventDetail = () => {
	const { id } = useParams();
	const [event, setFetchedEvent] = useState(null);
	const navigate = useNavigate();

	const { setEvent } = useEvent();

	useEffect(() => {
		const fetchEvent = async () => {
			const data = await getEventById(id);
			setFetchedEvent(data);
		};

		fetchEvent();
	}, [id]);

	const handleBooking = (event) => {
		setEvent(event);
		navigate('/book-event');
	};

	if (!event) {
		return <p>Loading...</p>;
	}

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-lg w-full space-y-8">
				<div className="bg-white p-6 rounded-lg shadow-lg">
					<h2 className="text-3xl font-extrabold text-gray-900 mb-4">
						{event.name}
					</h2>
					<p className="text-gray-700 text-lg mb-4">{event.description}</p>
					<div className="mb-4">
						<p className="text-gray-600 text-sm">
							Date: {new Date(event.date).toLocaleString()}
						</p>
						<p className="text-gray-600 text-sm">Price: ${event.price}</p>
						<p className="text-gray-600 text-sm">Capacity: {event.capacity}</p>
						<p className="text-gray-600 text-sm">
							Tickets Sold: {event.ticketsSold}
						</p>
					</div>
					<div className="flex justify-between mt-6">
						<button
							className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
							onClick={() => handleBooking(event)}
						>
							Book Event
						</button>
						<Link
							to={'/events'}
							className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
						>
							Back to Events
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventDetail;
