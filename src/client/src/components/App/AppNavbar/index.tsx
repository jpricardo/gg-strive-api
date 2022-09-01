import { useContext } from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../store/auth-context';

const AppNavbar = () => {
	const { isLogged, logout } = useContext(AuthContext);

	return (
		<Navbar bg='dark' variant='dark' expand='md' fixed='top'>
			<Container>
				<Navbar.Brand>
					<Nav.Link as={Link} to='/'>
						STRIVE API
					</Nav.Link>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className='justify-content-between'>
					<Stack direction='horizontal' gap={3}>
						<Navbar.Text>
							<Nav.Link as={Link} to='/characters'>
								Characters
							</Nav.Link>
						</Navbar.Text>
						<Navbar.Text>
							<Nav.Link as={Link} to='/players'>
								Players
							</Nav.Link>
						</Navbar.Text>
					</Stack>
					<div>
						{!isLogged && (
							<Navbar.Text>
								<Nav.Link as={Link} to='/login'>
									Login
								</Nav.Link>
							</Navbar.Text>
						)}
						{isLogged && (
							<Navbar.Text onClick={logout}>
								<Nav.Link>Logout</Nav.Link>
							</Navbar.Text>
						)}
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavbar;
