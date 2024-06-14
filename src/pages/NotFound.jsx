import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="text-center">
				<h1 className="text-9xl font-bold text-gray-800">404</h1>
				<p className="text-2xl font-medium text-gray-600 mt-4">
					Ooops! Page Not Found
				</p>
				<p className="text-gray-500 mt-2">
					The page you are looking for might have been removed or is temporarily
					unavailable.
				</p>
				<Link
					to="/"
					className="mt-6 inline-block px-6 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-200"
				>
					Go to Homepage
				</Link>
			</div>
		</div>
	);
};
export default NotFound;
