import { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import Router, { IRoute, Methods } from './router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class ClientRouter extends Router {
	routes: IRoute[] = [{ path: '*', method: Methods.GET, handlers: [this.clientHandler] }];

	private clientHandler(req: Request, res: Response) {
		res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
	}

	constructor() {
		super();
	}
}
