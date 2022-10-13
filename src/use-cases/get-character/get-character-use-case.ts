import Character from '../../entities/implementations/character.js';
import { ICharactersRepository } from '../../repositories/characters-repository.js';
import { IGetCharacterDTO } from './get-character-dto.js';

export default class GetCharacterUseCase {
	constructor(private charactersRepository: ICharactersRepository) {}

	async execute(data: IGetCharacterDTO): Promise<Character> {
		const character = await this.charactersRepository.getByName(data.name);
		if (!character) throw new Error('Not found!');
		return character;
	}
}
