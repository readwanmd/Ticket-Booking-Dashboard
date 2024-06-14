import { useContext } from 'react';
import EventContext from '../contexts/EventContext';

const useEvent = () => {
	return useContext(EventContext);
};

export default useEvent;
