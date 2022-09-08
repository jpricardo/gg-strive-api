import { Router } from 'express';
import UserController from '../../controllers/user.js';

const router = Router();

router.get('/', UserController.requireAuth, UserController.getUserFromToken);

router.route('/login').post(UserController.login);

router.route('/signup').post(UserController.requireAuth, UserController.create);

export default router;
