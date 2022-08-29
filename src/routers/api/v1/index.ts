import { Router } from 'express';
import charactersRouter from './characters.js';

const router = Router();

router.get('/', (req, res) => {
	res.send('Root da API v1!');
});

router.use('/characters', charactersRouter);

export default router;
