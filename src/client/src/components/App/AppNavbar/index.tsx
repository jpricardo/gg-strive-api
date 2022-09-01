import { useContext } from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../store/auth-context';

import styles from './index.module.css';

const AppNavbar = () => {
	const { isLogged, logout } = useContext(AuthContext);

	return (
		<Navbar bg='dark' variant='dark' expand='sm' fixed='top'>
			<Container>
				<Navbar.Brand>
					<Nav.Link as={Link} to='/'>
						STRIVE API
					</Nav.Link>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className='justify-content-between'>
					<Nav>
						<Nav.Link as={Link} to='/characters' className={styles.navLink}>
							<Navbar.Text>Characters</Navbar.Text>
						</Nav.Link>
						<Nav.Link as={Link} to='/players' className={styles.navLink}>
							<Navbar.Text>Players</Navbar.Text>
						</Nav.Link>
					</Nav>
					<Nav>
						{!isLogged && (
							<Nav.Link as={Link} to='/login' className={styles.navLink}>
								<Navbar.Text>Login</Navbar.Text>
							</Nav.Link>
						)}
						{isLogged && (
							<Nav.Link onClick={logout} className={styles.navLink}>
								<Navbar.Text>Logout</Navbar.Text>
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavbar;
