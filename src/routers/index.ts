import { Router } from 'express';
import clientRouter from './client/index.js';
import apiRouter from './api/index.js';
import authRouter from './auth/index.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/api', apiRouter);
router.use('/', clientRouter);

export default router;
