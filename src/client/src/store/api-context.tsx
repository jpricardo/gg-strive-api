import axios, { AxiosResponse } from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from './auth-context';

interface IDefaultContext {
	getCharacters: () => Promise<AxiosResponse<IGetCharactersResponse, any>>;
	createCharacter: (payload: Partial<ICharacter>) => Promise<AxiosResponse<any, any>>;
	updateCharacterByName: (name: string, payload: Partial<ICharacter>) => Promise<AxiosResponse<any, any>>;
	deleteCharacterByName: (name: string) => Promise<AxiosResponse<any, any>>;
}
const ApiContext = React.createContext<Partial<IDefaultContext>>({});

type Props = { children: React.ReactNode };
const ApiContextProvider: React.FC<Props> = ({ children }) => {
	const { token } = useContext(AuthContext);

	const getCharacters = () => axios.get<IGetCharactersResponse>('/api/v1/characters');
	const createCharacter = (payload: Partial<ICharacter>) => axios.post('/api/v1/characters', payload, { headers: { Authorization: token } });
	const updateCharacterByName = (name: string, payload: Partial<ICharacter>) =>
		axios.patch(`/api/v1/characters/${name}`, payload, { headers: { Authorization: token } });
	const deleteCharacterByName = (name: string) => axios.delete(`/api/v1/characters/${name}`, { headers: { Authorization: token } });

	const context = { getCharacters, createCharacter, updateCharacterByName, deleteCharacterByName };

	return <ApiContext.Provider value={context}>{children}</ApiContext.Provider>;
};

export { ApiContext, ApiContextProvider };
