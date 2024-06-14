import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../../api/events';

const EventDetail = () => {
	const { id } = useParams();
	const [event, setEvent] = useState(null);

	useEffect(() => {
		const fetchEvent = async () => {
			const data = await getEventById(id);
			setEvent(data);
		};

		fetchEvent();
	}, [id]);

	if (!event) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h3 className="text-xl text-gray-800">{event.name}</h3>

			<p>{event.description}</p>
			<p>Price: ${event.price}</p>
			<p>Tickets Available: {event.capacity - event.ticketsSold}</p>
			{/* Add booking form/button here */}
		</div>
	);
};

export default EventDetail;
