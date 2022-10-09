import express from 'express';
import InvalidMethodError from '../errors/invalid-method-error.js';

export enum Methods {
	GET = 'get',
	POST = 'post',
	PATCH = 'patch',
	DELETE = 'delete',
	ALL = 'all',
	USE = 'use',
}

export interface IRoute {
	path: string;
	method: Methods;
	handlers: any[];
	routeMiddleware?: any[];
}

export default abstract class Router {
	private readonly router = express.Router();
	public abstract readonly routes: IRoute[];

	public setup(): express.Router {
		this.setupRoutes();
		return this.router;
	}

	private setupRoutes() {
		this.routes.forEach((route) => {
			route.routeMiddleware && this.setupMiddleware(route);
			this.setupHandlers(route);
		});
	}

	private setupMiddleware(route: IRoute) {
		this.router.use(route.path, route.routeMiddleware as any[]);
	}

	private setupHandlers(route: IRoute) {
		switch (route.method) {
			case Methods.GET:
				this.router.get(route.path, route.handlers);
				break;
			case Methods.POST:
				this.router.post(route.path, route.handlers);
				break;
			case Methods.PATCH:
				this.router.patch(route.path, route.handlers);
				break;
			case Methods.DELETE:
				this.router.delete(route.path, route.handlers);
				break;
			case Methods.USE:
				this.router.use(route.path, route.handlers);
				break;
			case Methods.ALL:
				this.router.all(route.path, route.handlers);
				break;
			default:
				throw new InvalidMethodError(route.method);
		}
	}
}
