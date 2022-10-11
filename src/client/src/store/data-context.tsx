import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from './api-context';

declare interface IDefaultContext {
	characters: ICharacter[];
	isLoading: boolean;
	refreshData: () => void;
	battleTypeOptions: string[];
}

const defaultContext: IDefaultContext = { characters: [], isLoading: false, refreshData: () => undefined, battleTypeOptions: [] };
const DataContext = React.createContext(defaultContext);

type Props = { children: React.ReactNode };
const DataContextProvider: React.FC<Props> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [characters, setCharacters] = useState<ICharacter[]>([]);
	const { getCharacters } = useContext(ApiContext);

	const battleTypeOptions = ['Balance', 'Long Range', 'High Speed', 'Power Throw', 'Unique', 'Technical', 'Shooting', 'One Shot', 'Rush', 'Power'].sort(
		(a, b) => a.localeCompare(b)
	);

	useEffect(() => {
		refreshData();
	}, []);

	const refreshData = () => {
		setIsLoading(true);
		getCharacters &&
			getCharacters()
				.then(({ data }) => {
					const characters: ICharacter[] = data.data;
					setIsLoading(false);
					setCharacters(characters.sort((a, b) => a.name.localeCompare(b.name)));
				})
				.catch(console.error);
	};

	const context = { characters, refreshData, isLoading, battleTypeOptions };

	return <DataContext.Provider value={context}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
