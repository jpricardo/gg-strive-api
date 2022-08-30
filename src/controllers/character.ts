import { Request, Response } from 'express';
import Character from '../models/character.js';

class CharacterController {
	async getAll(req: Request, res: Response) {
		const docs = await Character.find({}).lean().exec();
		res.status(200).send(docs);
	}

	async create(req: Request, res: Response) {
		try {
			const character = await Character.create(req.body);
			res.status(200).send(character);
		} catch ({ errors }) {
			res.status(400).send({ errors });
		}
	}

	async getByName(req: Request, res: Response) {
		const character = await Character.findOne({ name: req.params.name });
		res.status(200).send(character);
	}

	async updateByName(req: Request, res: Response) {
		const character = await Character.findOneAndUpdate({ name: req.params.name }, req.body);
		res.status(200).send(character);
	}
}
export default new CharacterController();
