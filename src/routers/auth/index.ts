import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	res.send('Root da auth!');
});

router
	.route('/login')
	.get((req, res) => {
		res.send('Rota de Login');
	})
	.post((req, res) => {
		res.send({ error: 'Não implementado!' });
	});

router
	.route('/signup')
	.get((req, res) => {
		res.send('Rota de cadastro');
	})
	.post((req, res) => {
		res.send({ error: 'Não implementado!' });
	});

export default router;
