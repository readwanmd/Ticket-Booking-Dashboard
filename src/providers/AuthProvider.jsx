import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [decodedUser, setDecodedUser] = useState(null);

	useEffect(() => {
		const user = localStorage.getItem('user');
		if (user) {
			setUser(JSON.parse(user));

			setDecodedUser(jwtDecode(user));
		}
	}, []);

	const login = (userData) => {
		setUser(userData);
		localStorage.setItem('user', JSON.stringify(userData));
	};

	const register = (userData) => {
		setUser(userData);
		localStorage.setItem('user', JSON.stringify(userData));
	};

	const logout = () => {
		setUser(null);
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
