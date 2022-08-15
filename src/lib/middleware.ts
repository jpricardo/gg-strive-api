import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const timelog = (req: Request, res: Response, next: NextFunction) => {
	console.log(`${new Date().toLocaleString()} ${req.method} ${req.path} - ${req.ip}`);
	next();
};

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send({ error: err.stack });
};

export default { timelog, errorHandler };
