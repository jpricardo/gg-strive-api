import express from 'express';
import charactersRouter from './routes/characters.js';
import middleware from './lib/middleware.js';

const app = express();
app.use(express.json());
app.use(middleware.timelog);

app.use('/characters', charactersRouter);

app.get('/about', (req, res) => {
	res.send('Hello! The app is running...');
});

app.use('*', (req, res) => {
	res.status(404).send({ error: 'Resource not found!' });
});

app.use(middleware.errorHandler);

export default app;
