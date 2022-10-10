import Character from '../../entities/character';
import { ICharactersRepository } from '../characters-repository';

export default class MongoCharactersRepository implements ICharactersRepository {
	private characters: Array<Character> = [];

	async save(character: Character) {
		this.characters.push(character);
	}

	async getByName(name: string) {
		return this.characters.find((character) => character.name === name);
	}

	async updateByName(name: string) {}

	async deleteByName(name: string) {}
}
