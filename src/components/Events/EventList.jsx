import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEvents } from '../../api/events';
import useEvent from '../../hooks/useEvent';
import EventCard from './EventCard';

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
			<h2 className="text-4xl mb-4 font-semibold">Events</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{events.map((event) => (
					<EventCard key={event._id} event={event} />
				))}
			</div>
		</div>
	);
};

export default EventList;
