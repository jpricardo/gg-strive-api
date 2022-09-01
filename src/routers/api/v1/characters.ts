import express from 'express';
import CharacterController from '../../../controllers/character.js';
import UserController from '../../../controllers/user.js';

const router = express.Router();

router.route('/').get(CharacterController.getAll).post(UserController.requireAuth, CharacterController.create);

router
	.route('/:name')
	.get(CharacterController.getByName)
	.patch(UserController.requireAuth, CharacterController.updateByName)
	.delete(UserController.requireAuth, CharacterController.deleteByName);

export default router;
