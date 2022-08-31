import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import { ApiContext } from '../../../store/api-context';
import { DataContext } from '../../../store/data-context';
import { CharacterCard, AddCharacterCard } from '../Cards';
import styles from './index.module.css';
import { AddCharacterModal } from '../Modals';
import { AuthContext } from '../../../store/auth-context';

const Home = () => {
	const { characters } = useContext(DataContext);
	const { isLogged } = useContext(AuthContext);

	const [showModal, setShowModal] = useState(false);

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	return (
		<>
			<Row as='section'>
				<Col>
					<Row as='header' className={styles.header}>
						<h1>Characters</h1>
					</Row>
					<Row>
						{characters.map((character) => (
							<Col lg={2} md={3} sm={4} xs={6} key={character.name} className='mb-2'>
								<CharacterCard data={character} />
							</Col>
						))}
						{isLogged && (
							<Col lg={2} md={3} sm={4} xs={6} className='mb-2'>
								<AddCharacterCard onClick={openModal} />
							</Col>
						)}
					</Row>
				</Col>
			</Row>
			<AddCharacterModal show={showModal} handleClose={closeModal} />
		</>
	);
};

export default Home;
