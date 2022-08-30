import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from './api-context';

declare interface IDefaultContext {
	characters: ICharacter[];
	isLoading: boolean;
	refreshData: () => void;
}

const defaultContext: IDefaultContext = { characters: [], isLoading: false, refreshData: () => undefined };
const DataContext = React.createContext(defaultContext);

type Props = { children: React.ReactNode };
const DataContextProvider: React.FC<Props> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [characters, setCharacters] = useState<ICharacter[]>([]);
	const { getCharacters } = useContext(ApiContext);

	useEffect(() => {
		refreshData();
	}, []);

	const refreshData = () => {
		setIsLoading(true);
		getCharacters()
			.then(({ data }) => {
				setIsLoading(false);
				setCharacters(data.sort((a, b) => a.name.localeCompare(b.name)));
			})
			.catch(console.error);
	};

	const context = { characters, refreshData, isLoading };

	return <DataContext.Provider value={context}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
