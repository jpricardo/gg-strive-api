import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../store/auth-context';
import Login from './Login';

const App = () => {
	const { isLogged } = useContext(AuthContext);
	return (
		<Container as='section' className='pt-3 px-4 m-auto'>
			{!isLogged && <Login />}
		</Container>
	);
};

export default App;
