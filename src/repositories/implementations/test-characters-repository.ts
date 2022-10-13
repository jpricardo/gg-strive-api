import Character, { ICharacterProps } from '../../entities/implementations/character';
import { ICharactersRepository } from '../characters-repository';

export default class TestCharactersRepository implements ICharactersRepository {
	private characters: Array<Character> = [];

	async save(character: Character) {
		this.characters.push(character);
	}

	async getAll() {
		return this.characters;
	}

	async getByName(name: string) {
		return this.characters.find((character) => character.name === name);
	}

	async updateByName(name: string, payload: ICharacterProps) {
		const oldCharacter = await this.getByName(name);
		if (!oldCharacter) throw new Error('Not found');
		const newCharacter = new Character({ ...oldCharacter, ...payload });

		await this.deleteByName(name);
		await this.save(newCharacter);
	}

	async deleteByName(name: string) {
		this.characters = this.characters.filter((character) => character.name !== name);
	}
}
