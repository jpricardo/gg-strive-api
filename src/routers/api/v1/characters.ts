import express from 'express';
import CharacterController from '../../../controllers/character.js';

const router = express.Router();

router.route('/').get(CharacterController.getAll).post(CharacterController.create);

router.route('/:name').get(CharacterController.getByName).patch(CharacterController.updateByName);

export default router;
