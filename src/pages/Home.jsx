import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="text-center mt-8">
			<h2 className="text-4xl mb-4">Welcome to Ticket Booking</h2>
			<p className="text-xl mb-4">
				Book tickets for your favorite events easily!
			</p>
			<Link
				to="/events"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Browse Events
			</Link>
		</div>
	);
};

export default Home;
