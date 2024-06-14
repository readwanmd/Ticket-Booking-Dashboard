import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getEvents } from '../../api/events';
import useEvent from '../../hooks/useEvent';

const EventList = () => {
	const [events, setEvents] = useState([]);
	const { setEvent } = useEvent();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchEvents = async () => {
			const data = await getEvents();
			setEvents(data);
		};

		fetchEvents();
	}, []);

	const handleBooking = (event) => {
		setEvent(event);
		navigate('/book-event');
	};

	return (
		<div>
			<h2 className="text-2xl">Events</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{events.map((event) => (
					<div key={event._id} className="p-4 border border-gray-400 rounded">
						<h3 className="text-xl text-gray-800">{event.name}</h3>
						<p>{event.description}</p>
						<div className="my-3 flex gap-2">
							<Link to={`/event/${event._id}`} className="btn">
								View Details
							</Link>
							<Link
								to={'/book-event'}
								onClick={() => handleBooking(event)}
								className="btn btn-primary"
							>
								Book event
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default EventList;
