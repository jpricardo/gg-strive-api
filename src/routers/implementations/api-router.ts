import { Request, Response } from 'express';

import Router, { IRoute, Methods } from '../router.js';

import CharacterController from '../../controllers/character-controller.js';
import UserController from '../../controllers/user-controller.js';

import { createCharacterController } from '../../use-cases/create-character/index.js';
import { getAllCharactersController } from '../../use-cases/get-all-characters/index.js';
import { getCharacterController } from '../../use-cases/get-character/index.js';

class CharacterRouter extends Router {
	routes: IRoute[] = [
		{ path: '/:name', method: Methods.GET, handlers: [this.getCharacterByName] },
		{ path: '/:name', method: Methods.PATCH, handlers: [UserController.requireAuth, CharacterController.updateByName] },
		{ path: '/:name', method: Methods.DELETE, handlers: [CharacterController.deleteByName] },
		{ path: '/', method: Methods.GET, handlers: [this.getAllCharacters] },
		{ path: '/', method: Methods.POST, handlers: [UserController.requireAuth, this.createCharacter] },
	];

	async createCharacter(request: Request, response: Response) {
		await createCharacterController.handle(request, response);
	}

	async getCharacterByName(request: Request, response: Response) {
		await getCharacterController.handle(request, response);
	}

	async getAllCharacters(request: Request, response: Response) {
		await getAllCharactersController.handle(request, response);
	}

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
