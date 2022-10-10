import CreateCharacterUseCase from './create-character-use-case';
import { Request, Response } from 'express';
import { IMove } from '../../entities/character';

export default class CreateCharacterController {
	constructor(private createCharacterUseCase: CreateCharacterUseCase) {}
	async handle(request: Request, response: Response) {
		console.log('Rodando no novo controller!');
		const { name, displayName, easyToUse, battleType } = request.body;
		const moves: IMove[] = [];

		try {
			await this.createCharacterUseCase.execute({ name, displayName, easyToUse, battleType, moves });
		} catch (err: any) {
			return response.status(400).json({ message: err.message || 'Unexpected error!' });
		}
	}
}
