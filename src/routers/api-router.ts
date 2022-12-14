import { Request, Response } from 'express';

import Router, { IRoute, Methods } from './router.js';

import CharacterController from '../controllers/character-controller.js';
import UserController from '../controllers/user-controller.js';

class CharacterRouter extends Router {
	routes: IRoute[] = [
		{ path: '/:name', method: Methods.GET, handlers: [CharacterController.getByName] },
		{ path: '/:name', method: Methods.PATCH, handlers: [UserController.requireAuth, CharacterController.updateByName] },
		{ path: '/:name', method: Methods.DELETE, handlers: [CharacterController.deleteByName] },
		{ path: '/', method: Methods.GET, handlers: [CharacterController.getAll] },
		{ path: '/', method: Methods.POST, handlers: [UserController.requireAuth, CharacterController.create] },
	];
	constructor() {
		super();
	}
}

class V1Router extends Router {
	routes: IRoute[] = [
		{ path: '/characters', method: Methods.USE, handlers: [new CharacterRouter().setup()] },
		{ path: '/', method: Methods.USE, handlers: [this.indexHandler] },
	];

	private indexHandler(req: Request, res: Response) {
		res.send('API v1 Root!');
	}

	constructor() {
		super();
	}
}

export default class ApiRouter extends Router {
	routes: IRoute[] = [
		{ path: '/v1', method: Methods.USE, handlers: [new V1Router().setup()] },
		{ path: '/', method: Methods.GET, handlers: [this.indexHandler] },
	];

	private indexHandler(req: Request, res: Response) {
		res.send('API Root!');
	}

	constructor() {
		super();
	}
}
