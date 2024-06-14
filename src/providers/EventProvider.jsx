import { useState } from 'react';
import EventContext from '../contexts/EventContext';

const EventProvider = ({ children }) => {
	const [event, setEvent] = useState(null);

	return (
		<EventContext.Provider value={{ setEvent, event }}>
			{children}
		</EventContext.Provider>
	);
};

export default EventProvider;
