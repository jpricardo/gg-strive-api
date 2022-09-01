import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

declare interface IDefaultContext {
	isLogged: boolean;
	isLoading: boolean;
	currentUser: IUser | undefined;
	token: string;
	login: (data: { username: string; password: string }) => void;
	logout: () => void;
}

const defaultContext: IDefaultContext = {
	isLogged: false,
	isLoading: false,
	currentUser: undefined,
	token: '',
	login: () => console.error('Não implementado'),
	logout: () => console.error('Não implementado'),
};

const AuthContext = createContext(defaultContext);

type Props = { children: React.ReactNode };
const AuthContextProvider: React.FC<Props> = ({ children }) => {
	const [token, setToken] = useState<string>('');
	const [currentUser, setCurrentUser] = useState<IUser>();
	const [isLogged, setIsLogged] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => setIsLoading(false), 2000);
		return () => clearTimeout(timeout);
	});

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) return setToken(token);
	});

	useEffect(() => {
		getCurrentUser();
	}, [token]);

	const getCurrentUser = () => {
		setIsLoading(true);
		axios
			.get<IUser>('/auth', { headers: { Authorization: token } })
			.then((res) => {
				if (!res.data.success) throw new Error(res.data.error);
				setCurrentUser(res.data);
				setIsLogged(true);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLogged(false);
				setCurrentUser(undefined);
				setIsLoading(false);
			});
	};

	const login = ({ username, password }: { username: string; password: string }) => {
		setIsLoading(true);
		axios
			.post('/auth/login', { username, password })
			.then(({ data }) => {
				if (!data.success) throw new Error(data.error);
				console.log(data);
				localStorage.setItem('token', data.token);
				setToken(data.token);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setIsLoading(false);
			});
	};

	const logout = () => {
		setIsLoading(true);
		localStorage.removeItem('token');
		setToken('');
		setIsLoading(false);
	};

	const context = { isLogged, isLoading, currentUser, token, login, logout };

	return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
