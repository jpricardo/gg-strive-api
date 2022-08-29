import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticFilesHandler = express.static(path.join(__dirname, '..', 'client', 'build'));

const timelog = (req: Request, res: Response, next: NextFunction) => {
	console.log(`${new Date().toLocaleString()} ${req.method} ${req.path} - ${req.ip}`);
	next();
};

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send({ error: err.stack });
};

export default { timelog, errorHandler, staticFilesHandler };
