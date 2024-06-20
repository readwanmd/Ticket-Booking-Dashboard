import { Link } from 'react-router-dom';
import user from '../../assets/user.png';
import useAuth from '../../hooks/useAuth';
import Logout from '../Auth/Logout';

const Sidebar = () => {
	const { decodedUser } = useAuth();
	console.log(decodedUser);

	return (
		<div className="fixed h-screen w-64 flex flex-col justify-between bg-gray-800 text-white">
			<div>
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
							<Link to="/bookings/me">My Bookings</Link>
						</li>
						{decodedUser?.user.role === 'admin' && (
							<>
								<li className="p-4 hover:bg-gray-700">
									<Link to="/bookings">All Bookings</Link>
								</li>

								<li className="p-4 hover:bg-gray-700">
									<Link to="/create-event">Create Event</Link>
								</li>
							</>
						)}
						<li className="p-4 hover:bg-gray-700">
							<Link to="/update-event">Update Event</Link>
						</li>
					</ul>
				</nav>
			</div>

			<div>
				<h3 className="p-4 hover:bg-gray-700 w-full text-start flex items-center gap-2">
					<img
						src={user}
						alt="avater"
						className="inline-block invert"
						width={25}
					/>
					{decodedUser?.user?.name}
				</h3>
				<Logout />
			</div>
		</div>
	);
};

export default Sidebar;
