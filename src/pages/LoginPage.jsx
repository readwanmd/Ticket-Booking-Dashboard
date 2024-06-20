import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import useAuth from '../hooks/useAuth';

const LoginPage = () => {
	const { login: loginUser } = useAuth();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		try {
			const user = await login(formData);
			loginUser(user);
			console.log(user);
			navigate('/');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section className="flex justify-center">
			<div className="mx-auto max-w-lg px-6 lg:px-8 py-8">
				<p className="text-4xl font-bold text-center my-5">
					Ticket Booking Dashboard
				</p>

				<div className="rounded-2xl bg-white shadow-xl">
					<form onSubmit={handleSubmit} className="lg:p-11 p-7 mx-auto">
						<div className="mb-11">
							<h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">
								Welcome Back
							</h1>
						</div>
						<input
							type="text"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full h-12  placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
							placeholder="Username"
							required
						/>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="w-full h-12  placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
							placeholder="Password"
							required
						/>
						<a href="javascript:;" className="flex justify-end mb-6">
							<span className="text-indigo-600 text-right text-base font-normal leading-6">
								Forgot Password?
							</span>
						</a>

						<button
							type="submit"
							className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm"
						>
							Login
						</button>

						<Link
							to="/register"
							className="flex  justify-center text-gray-900 text-base font-medium leading-6"
						>
							Don’t have an account?{' '}
							<span className="text-indigo-600 font-semibold pl-3">
								Sign Up
							</span>
						</Link>
					</form>
				</div>
			</div>
		</section>
	);
};
export default LoginPage;
