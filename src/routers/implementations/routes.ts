import { Request, Response } from 'express';
import ApiRouter from './api-router.js';
import AuthRouter from './auth-router.js';
import ClientRouter from './client-router.js';
import Router, { IRoute, Methods } from '../router.js';

export default class Routes extends Router {
	public routes: IRoute[] = [
		{ path: '/auth', method: Methods.USE, handlers: [new AuthRouter().setup()] },
		{ path: '/api', method: Methods.USE, handlers: [new ApiRouter().setup()] },
		{ path: '/', method: Methods.USE, handlers: [new ClientRouter().setup()] },
		{ path: '*', method: Methods.USE, handlers: [this.notFoundHandler] },
	];

	private notFoundHandler(req: Request, res: Response) {
		res.status(404).send({ error: 'Resource not found!' });
	}

	constructor() {
		super();
	}
}
