import { FormEventHandler, useContext } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { AuthContext } from '../../../store/auth-context';

import styles from './index.module.css';

const Login = () => {
	const { login } = useContext(AuthContext);
	const handleSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		login();
	};

	return (
		<Card className={styles.card + ' px-3 py-2'}>
			<Card.Body as='section' className='px-4 py-2'>
				<Row as='article'>
					<header className='text-center pt-3'>
						<Row>
							<h1>Bem vind@!</h1>
						</Row>
						<Row>
							<h2>Faça Login para continuar...</h2>
						</Row>
					</header>
					<Form onSubmit={handleSubmit} className='pb-2'>
						<Form.Group as={Row}>
							<Form.Label>Usuário</Form.Label>
							<Form.Control type='text' required />
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label>Senha</Form.Label>
							<Form.Control type='password' required />
						</Form.Group>
						<Row className='mt-3'>
							<a href='#'>Esqueci minha senha!</a>
						</Row>
						<Row className='mt-4 justify-content-center'>
							<Button type='submit' className='w-100'>
								Entrar
							</Button>
						</Row>
					</Form>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default Login;
