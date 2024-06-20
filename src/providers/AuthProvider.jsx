import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [decodedUser, setDecodedUser] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			const parsedUser = JSON.parse(storedUser);
			setUser(parsedUser);

			if (parsedUser.token) {
				setDecodedUser(jwtDecode(parsedUser.token));
			}
		}
	}, []);

	const login = (userData) => {
		setUser(userData);
		localStorage.setItem('user', JSON.stringify(userData.token));

		if (userData.token) {
			// setDecodedUser(jwtDecode(userData.token));
		}
	};

	const register = (userData) => {
		setUser(userData);
		localStorage.setItem('user', JSON.stringify(userData));

		if (userData.token) {
			setDecodedUser(jwtDecode(userData.token));
		}
	};

	const logout = () => {
		setUser(null);
		setDecodedUser(null);
		localStorage.removeItem('user');
	};

	return (
		<AuthContext.Provider
			value={{ user, decodedUser, login, logout, register }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
