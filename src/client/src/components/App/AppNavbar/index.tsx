import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
	return (
		<Navbar bg='dark' variant='dark' expand='md' fixed='top'>
			<Container>
				<Navbar.Brand>
					<Link to='/admin'>GG API</Link>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Navbar.Text>
						<Nav.Link as={Link} to='/admin'>
							Characters
						</Nav.Link>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavbar;
