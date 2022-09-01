import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../store/auth-context';

const AppNavbar = () => {
	const { isLogged } = useContext(AuthContext);

	return (
		<Navbar bg='dark' variant='dark' expand='md' fixed='top'>
			<Container>
				<Navbar.Brand>
					<Nav.Link as={Link} to='/'>
						Strive API
					</Nav.Link>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className='justify-content-between'>
					<div>
						<Navbar.Text>
							<Nav.Link as={Link} to='/characters'>
								Characters
							</Nav.Link>
						</Navbar.Text>
					</div>
					<div>
						{!isLogged && (
							<Navbar.Text>
								<Link to='/login'>Login</Link>
							</Navbar.Text>
						)}
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavbar;
