import express from 'express';
import character from '../../../models/character.js';

const router = express.Router();

router.route('/').get(async (req, res) => {
	character.getAllCharacters().then((data) => {
		res.status(200).send(data);
	});
});

router.route('/:id').get(async (req, res) => {
	character
		.getCharacterById(req.params.id)
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((error) => {
			res.status(404).send({ error });
		});
});

export default router;
