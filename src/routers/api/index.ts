import { Router } from 'express';
import apiV1Router from './v1/index.js';

const router = Router();

router.get('/', (req, res) => {
	res.send('Root da API!');
});

router.use('/v1', apiV1Router);

export default router;
