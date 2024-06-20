import { useNavigate } from 'react-router-dom';
import logoutIcon from '../../assets/logout.png';
import useAuth from '../../hooks/useAuth';

const Logout = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	const handleLogout = () => {
		logout();
		alert('User logged out');
		navigate('/login');
	};

	return (
		<button
			className="p-4 hover:bg-gray-700 w-full text-start flex items-center gap-2"
			onClick={handleLogout}
		>
			<img
				src={logoutIcon}
				alt="icon"
				className="inline-block invert"
				width={25}
			/>
			Logout
		</button>
	);
};
export default Logout;
