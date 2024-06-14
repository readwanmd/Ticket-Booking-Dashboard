import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';

const MainLayout = () => {
	return (
		<div className="flex min-h-screen bg-gray-100">
			<div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
				<Sidebar />
			</div>
			<div className="flex-1 ml-64 p-4">
				<Outlet />
			</div>
		</div>
	);
};
export default MainLayout;
