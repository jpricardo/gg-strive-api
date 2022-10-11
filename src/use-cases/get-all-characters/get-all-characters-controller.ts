import { Request, Response } from 'express';
import GetAllCharactersUseCase from './get-all-characters-use-case';

export default class GetAllCharactersController {
	constructor(private getAllCharactersUseCase: GetAllCharactersUseCase) {}

	async handle(request: Request, response: Response) {
		try {
			const characters = await this.getAllCharactersUseCase.execute();
			response.status(200).json({ success: true, data: characters.map((character) => character.toJson()) });
		} catch (err: any) {
			console.error(err.message);
			return response.status(400).json({ success: false, message: err.message || 'Unexpected error!' });
		}
	}
}
