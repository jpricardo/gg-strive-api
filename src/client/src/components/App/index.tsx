import { Route, Routes } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import CharacterPage from './CharacterPage';
import Home from './Home';
import Login from './Login';
import AppNavbar from './AppNavbar';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/admin'>
				<Route path='' element={<Home />} />
				<Route path='character/:name' element={<CharacterPage />} />
				<Route path='login' element={<Login />} />
			</Route>
		</Routes>
	);
};

const App = () => {
	return (
		<>
			<AppNavbar />
			<Container as='section' className='pt-3 px-4 mx-auto mt-5'>
				<AppRoutes />
			</Container>
		</>
	);
};

export default App;
