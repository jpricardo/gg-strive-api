import Character from '../entities/character';

export interface ICharactersRepository {
	save: (character: Character) => Promise<void>;
	getByName: (name: string) => Promise<Character | undefined>;
	updateByName: (name: string) => Promise<void>;
	deleteByName: (name: string) => Promise<void>;
}
