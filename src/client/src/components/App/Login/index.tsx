import { FormEventHandler, useContext, useState } from 'react';
import { Button, Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { AuthContext } from '../../../store/auth-context';
import RequireGuest from '../RequireGuest';

import styles from './index.module.css';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { login } = useContext(AuthContext);

	const handleSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		login({ username, password });
	};

	return (
		<RequireGuest>
			<Card className={styles.card + ' px-3 py-2 mt-4 mx-auto'}>
				<Card.Body as='section' className='px-4 py-2'>
					<Row as='article'>
						<header className='text-center pt-3'>
							<Row>
								<h1>Welcome Back!</h1>
							</Row>
						</header>
						<Form onSubmit={handleSubmit} className='pb-2'>
							<Form.Group className='my-2'>
								<FloatingLabel label='Username'>
									<Form.Control type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
								</FloatingLabel>
							</Form.Group>
							<Form.Group className='my-2'>
								<FloatingLabel label='Password'>
									<Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value.trim())} required />
								</FloatingLabel>
							</Form.Group>
							<Row className='mt-3'>
								<a href='#'>Forgot my password!</a>
							</Row>
							<Row className='my-2 justify-content-center'>
								<Col>
									<Button type='submit' className='w-100'>
										LET'S ROCK!
									</Button>
								</Col>
							</Row>
						</Form>
					</Row>
				</Card.Body>
			</Card>
		</RequireGuest>
	);
};

export default Login;
