import Character from '../../entities/character.js';
import { ICharactersRepository } from '../../repositories/characters-repository.js';

export default class GetAllCharactersUseCase {
	constructor(private charactersRepository: ICharactersRepository) {}

	async execute(): Promise<Character[]> {
		const characters = this.charactersRepository.getAll();
		return characters;
	}
}
