import { NextFunction, Request, Response } from 'express';
import User from '../schemas/user.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import { Types } from 'mongoose';

class UserController {
	_getToken = (user: { _id: Types.ObjectId; username: string; email?: string }) => {
		const token = jwt.sign({ id: user._id, username: user.username, email: user.email }, config.jwtSecret);
		return token;
	};

	create = async (req: Request, res: Response) => {
		try {
			const { username, email } = req.body;
			const password = bcryptjs.hashSync(req.body.password, 10);
			const user = await User.create({ username, email, password });
			const token = this._getToken(user);
			res.status(200).send({ success: true, token });
		} catch (err) {
			console.error(err);
			res.status(400).send({ success: false, error: err });
		}
	};

	login = async (req: Request, res: Response) => {
		if (!req.body.username || !req.body.password) {
			res.send({ success: false, error: 'Missing parameters!' });
			return;
		}

		const user = await User.findOne({ username: req.body.username });
		if (!user) return res.send({ success: false, error: 'User does not exist!' });
		if (!bcryptjs.compareSync(req.body.password, user.password)) return res.send({ success: false, error: 'Incorrect password!' });

		const token = this._getToken(user);
		res.send({ success: true, token });
	};

	requireAuth = async (req: Request, res: Response, next: NextFunction) => {
		const authorization = req.get('Authorization');
		if (!authorization) return res.send({ success: false, error: 'Token not Found!' });
		try {
			const decoded = jwt.verify(authorization, config.jwtSecret) as { id: string };
			const user = await User.findOne({ _id: decoded.id });
			if (!user) throw new Error('Invalid token!');
			next();
		} catch (e) {
			res.send({ success: false, error: 'Invalid Token!' });
		}
	};

	getUserFromToken = async (req: Request, res: Response) => {
		const authorization = req.get('Authorization') as string;
		const decoded = jwt.verify(authorization, config.jwtSecret) as { id: string };
		res.send({ success: true, ...decoded });
	};
}

export default new UserController();
