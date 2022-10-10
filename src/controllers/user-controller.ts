import { NextFunction, Request, Response } from 'express';
import User from '../models/user.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Config from '../config.js';
import { Types } from 'mongoose';
import DoNotInstantiateError from '../errors/do-not-instantiate-error.js';

export default class UserController {
	private static getToken = (user: { _id: Types.ObjectId; username: string; email?: string }) => {
		const token = jwt.sign({ id: user._id, username: user.username, email: user.email }, Config.jwtSecret);
		return token;
	};

	static create = async (req: Request, res: Response) => {
		try {
			const { username, email } = req.body;
			const password = bcryptjs.hashSync(req.body.password, 10);
			const user = await User.create({ username, email, password });
			const token = this.getToken(user);
			res.status(200).send({ success: true, token });
		} catch (err) {
			console.error(err);
			res.status(400).send({ success: false, error: err });
		}
	};

	static login = async (req: Request, res: Response) => {
		if (!req.body.username || !req.body.password) {
			res.send({ success: false, error: 'Missing parameters!' });
			return;
		}

		const user = await User.findOne({ username: req.body.username });
		if (!user) return res.send({ success: false, error: 'User does not exist!' });
		if (!bcryptjs.compareSync(req.body.password, user.password)) return res.send({ success: false, error: 'Incorrect password!' });

		const token = this.getToken(user);
		res.send({ success: true, token });
	};

	static requireAuth = async (req: Request, res: Response, next: NextFunction) => {
		const authorization = req.get('Authorization');
		if (!authorization) return res.send({ success: false, error: 'Token not Found!' });
		try {
			const decoded = jwt.verify(authorization, Config.jwtSecret) as { id: string };
			const user = await User.findOne({ _id: decoded.id });
			if (!user) throw new Error('Invalid token!');
			next();
		} catch (e) {
			res.send({ success: false, error: 'Invalid Token!' });
		}
	};

	static getUserFromToken = async (req: Request, res: Response) => {
		const authorization = req.get('Authorization') as string;
		const decoded = jwt.verify(authorization, Config.jwtSecret) as { id: string };
		res.send({ success: true, ...decoded });
	};

	constructor() {
		throw new DoNotInstantiateError();
	}
}
