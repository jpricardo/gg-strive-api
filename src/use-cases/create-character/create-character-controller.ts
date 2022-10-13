import CreateCharacterUseCase from './create-character-use-case';
import { Request, Response } from 'express';
import Move from '../../entities/implementations/move';

export default class CreateCharacterController {
	constructor(private createCharacterUseCase: CreateCharacterUseCase) {}

	async handle(request: Request, response: Response) {
		const { name, displayName, easyToUse, battleType } = request.body;
		const moves: Move[] = [];

		try {
			await this.createCharacterUseCase.execute({ name, displayName, easyToUse, battleType, moves });
			response.status(200).json({ success: true });
		} catch (err: any) {
			console.error(err.message);
			return response.status(400).json({ success: false, message: err.message || 'Unexpected error!' });
		}
	}
}
