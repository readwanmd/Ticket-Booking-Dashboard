import { Route, Routes } from 'react-router-dom';

import BookingForm from '../components/Bookings/BookingForm';
import EventDetail from '../components/Events/EventDetail';
import useAuth from '../hooks/useAuth';
import MainLayout from '../layout/MainLayout';
import Bookings from '../pages/Bookings';
import CreateEvent from '../pages/CreateEvent';
import Events from '../pages/Events';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import NotFound from '../pages/NotFound';
import PaymentPage from '../pages/PaymentPage';
import RegistrationPage from '../pages/RegistrationPage';
import UserProvider from '../providers/AuthProvider';
import EventProvider from '../providers/EventProvider';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
	const { decodedUser } = useAuth();

	return (
		<UserProvider>
			<EventProvider>
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route element={<MainLayout />}>
							<Route path="/" element={<Home />} />
							<Route path="/events" element={<Events />} />
							<Route path="/event/:id" element={<EventDetail />} />
							<Route path="/book-event" element={<BookingForm />} />
							<Route path="/payment" element={<PaymentPage />} />
							<Route path="/Bookings" element={<Bookings />} />
							{decodedUser?.user.role === 'admin' && (
								<>
									<Route path="/create-event" element={<CreateEvent />} />
								</>
							)}
						</Route>
					</Route>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegistrationPage />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</EventProvider>
		</UserProvider>
	);
};
export default AppRoutes;
