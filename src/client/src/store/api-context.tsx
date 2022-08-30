import axios from 'axios';
import React from 'react';

const getCharacters = () => axios.get<ICharacter[]>('/api/v1/characters');
const createCharacter = (payload: ICharacter) => axios.post('/api/v1/characters', payload);
const updateCharacterByName = (name: string, payload: Partial<ICharacter>) => axios.patch(`/api/v1/characters/${name}`, payload);

const defaultContext = {
	getCharacters,
	createCharacter,
	updateCharacterByName,
};
const ApiContext = React.createContext(defaultContext);

type Props = { children: React.ReactNode };
const ApiContextProvider: React.FC<Props> = ({ children }) => {
	return <ApiContext.Provider value={defaultContext}>{children}</ApiContext.Provider>;
};

export { ApiContext, ApiContextProvider };
