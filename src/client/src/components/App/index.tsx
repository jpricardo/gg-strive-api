import { Navigate, Route, Routes } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import CharacterPage from './CharacterPage';
import Home from './Home';
import Login from './Login';
import AppNavbar from './AppNavbar';
import ComingSoon from './ComingSoon';

import './index.css';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/characters' replace={true} />} />
			<Route path='/characters' element={<Home />} />
			<Route path='/characters/:name' element={<CharacterPage />} />
			<Route path='/players' element={<ComingSoon />} />
			<Route path='/login' element={<Login />} />
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
