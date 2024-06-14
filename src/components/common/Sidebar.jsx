import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className="fixed h-screen w-64 bg-gray-800 text-white">
			<div className="p-4">
				<h1 className="text-xl font-bold">Ticket Booking Dashboard</h1>
			</div>
			<nav>
				<ul>
					<li className="p-4 hover:bg-gray-700">
						<Link to="/">Home</Link>
					</li>
					<li className="p-4 hover:bg-gray-700">
						<Link to="/events">Events</Link>
					</li>
					<li className="p-4 hover:bg-gray-700">
						<Link to="/bookings">Bookings</Link>
					</li>
					<li className="p-4 hover:bg-gray-700">
						<Link to="/create-event">Create Event</Link>
					</li>
					<li className="p-4 hover:bg-gray-700">
						<Link to="/update-event">Update Event</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
