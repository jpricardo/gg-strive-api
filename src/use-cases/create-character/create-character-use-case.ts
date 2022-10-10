import Character from '../../entities/character.js';
import { ICharactersRepository } from '../../repositories/characters-repository.js';
import { ICreateCharacterDTO } from './create-character-dto.js';

export default class CreateCharacterUseCase {
	constructor(private charactersRepository: ICharactersRepository) {}

	async execute(data: ICreateCharacterDTO) {
		const characterAlreadyExists = await this.charactersRepository.getByName(data.name);

		if (characterAlreadyExists) {
			throw new Error('Already exists!');
		}

		const character = new Character(data);

		await this.charactersRepository.save(character);
	}
}
