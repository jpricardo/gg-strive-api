import Router, { IRoute, Methods } from './router.js';

import UserController from '../controllers/user-controller.js';

export default class AuthRouter extends Router {
	routes: IRoute[] = [
		{ path: '/login', method: Methods.POST, handlers: [UserController.login] },
		{ path: '/signup', method: Methods.POST, handlers: [UserController.requireAuth, UserController.create] },
		{ path: '/', method: Methods.GET, handlers: [UserController.requireAuth, UserController.getUserFromToken] },
	];

	constructor() {
		super();
	}
}
