import express from 'express';
import middleware from './lib/middleware.js';
import routers from './routers/index.js';

const app = express();

app.use(express.json());

app.use(middleware.timelog);
app.use(middleware.staticFilesHandler);

app.use('/', routers);

app.get('/about', (req, res) => {
	res.send('Hello! The app is running...');
});

app.use('*', (req, res) => {
	res.status(404).send({ error: 'Resource not found!' });
});

app.use(middleware.errorHandler);

export default app;
