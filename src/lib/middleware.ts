import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import DoNotInstantiateError from '../errors/do-not-instantiate-error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Middleware {
	constructor() {
		throw new DoNotInstantiateError();
	}

	static registerMiddleware(app: express.Application) {
		this.registerCoreMiddleware(app);
		this.registerLoggingMiddleware(app);
		this.registerFileHandlers(app);
		this.registerErrorHandlers(app);
	}

	private static registerCoreMiddleware(app: express.Application) {
		app.use(express.json({ limit: '25mb' }));
	}

	private static registerLoggingMiddleware(app: express.Application) {
		app.use(this.timelog);
	}

	private static timelog(req: Request, res: Response, next: NextFunction) {
		console.log(`${new Date().toLocaleString()} ${req.method} ${req.path} - ${req.ip}`);
		next();
	}

	private static registerFileHandlers(app: express.Application) {
		const staticFilesHandler = express.static(path.join(__dirname, '..', 'client', 'build'));
		app.use(staticFilesHandler);
	}

	private static registerErrorHandlers(app: express.Application) {
		app.use(this.errorHandler);
	}

	private static errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
		console.error(err.stack);
		res.status(500).send({ error: err.stack });
	}
}

export default Middleware;
