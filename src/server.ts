import express from 'express';
import Middleware from './lib/middleware.js';
import routers from './routers/index.js';

const app = express();

Middleware.registerMiddleware(app);

app.use('/', routers);

app.use('*', (req, res) => {
	res.status(404).send({ error: 'Resource not found!' });
});

export default app;
