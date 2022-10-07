import { Request, Response } from 'express';
import Character from '../schemas/character.js';

class CharacterController {
	async getAll(req: Request, res: Response) {
		const docs = await Character.find({});
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

	async deleteByName(req: Request, res: Response) {
		await Character.findOneAndDelete({ name: req.params.name });
		res.status(200).send({ ok: 'Resource deleted' });
	}

	async getByName(req: Request, res: Response) {
		const character = await Character.findOne({ name: req.params.name });
		res.status(200).send(character);
	}

	async updateByName(req: Request, res: Response) {
		const options = { new: true, setDefaultsOnInsert: true };
		const character = await Character.findOneAndUpdate({ name: req.params.name }, req.body, options);
		res.status(200).send(character);
	}
}
export default new CharacterController();
