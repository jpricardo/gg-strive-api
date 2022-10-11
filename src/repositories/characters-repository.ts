import Character, { ICharacterProps } from '../entities/character';

export interface ICharactersRepository {
	save: (character: Character) => Promise<void>;
	getAll: () => Promise<Character[]>;
	getByName: (name: string) => Promise<Character | undefined>;
	updateByName: (name: string, payload: ICharacterProps) => Promise<void>;
	deleteByName: (name: string) => Promise<void>;
}
