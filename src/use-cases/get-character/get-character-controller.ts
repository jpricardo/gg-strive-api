import { Request, Response } from 'express';
import GetCharacterUseCase from './get-character-use-case';

export default class GetCharacterController {
	constructor(private getAllCharactersUseCase: GetCharacterUseCase) {}

	async handle(request: Request, response: Response) {
		const name = request.params.name;
		try {
			const character = await this.getAllCharactersUseCase.execute({ name });
			response.status(200).json(character.toJson());
		} catch (err: any) {
			console.error(err.message);
			return response.status(400).json({ success: false, message: err.message || 'Unexpected error!' });
		}
	}
}
