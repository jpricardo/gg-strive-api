import { Router } from 'express';
import adminRouter from './admin/index.js';
import apiRouter from './api/index.js';
import authRouter from './auth/index.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/api', apiRouter);
router.use('/admin', adminRouter);

export default router;
