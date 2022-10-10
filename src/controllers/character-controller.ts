import { Request, Response } from 'express';
import DoNotInstantiateError from '../errors/do-not-instantiate-error.js';
import Character from '../models/character.js';
export default class CharacterController {
	static async getAll(req: Request, res: Response) {
		const docs = await Character.find({});
		res.status(200).send(docs);
	}

	static async create(req: Request, res: Response) {
		try {
			const character = await Character.create(req.body);
			res.status(200).send(character);
		} catch ({ errors }) {
			res.status(400).send({ errors });
		}
	}

	static async deleteByName(req: Request, res: Response) {
		await Character.findOneAndDelete({ name: req.params.name });
		res.status(200).send({ ok: 'Resource deleted' });
	}

	static async getByName(req: Request, res: Response) {
		const character = await Character.findOne({ name: req.params.name });
		res.status(200).send(character);
	}

	static async updateByName(req: Request, res: Response) {
		const options = { new: true, setDefaultsOnInsert: true };
		const character = await Character.findOneAndUpdate({ name: req.params.name }, req.body, options);
		res.status(200).send(character);
	}

	constructor() {
		throw new DoNotInstantiateError();
	}
}
