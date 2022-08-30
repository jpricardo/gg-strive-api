import axios from 'axios';
import React, { createContext, useState } from 'react';

declare interface IDefaultContext {
	isLogged: boolean;
	currentUser: IUser | null;
	login: () => void;
}

const defaultContext: IDefaultContext = {
	isLogged: false,
	currentUser: null,
	login: () => console.error('Não implementado'),
};

const AuthContext = createContext(defaultContext);

type Props = { children: React.ReactNode };
const AuthContextProvider: React.FC<Props> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(defaultContext.currentUser);
	const [isLogged, setIsLogged] = useState(true);

	const login = () => {
		axios.post('/auth/login').then(console.log).catch(console.error);
	};

	const context = { isLogged, currentUser, login };

	return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
