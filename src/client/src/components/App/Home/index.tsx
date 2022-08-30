import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import { ApiContext } from '../../../store/api-context';
import { DataContext } from '../../../store/data-context';
import CharacterCard from '../CharacterCard';

const Home = () => {
	const { characters } = useContext(DataContext);

	return (
		<>
			<Row as='section'>
				<Col>
					<Row as='header'>
						<h1>Conteúdo principal</h1>
					</Row>
					<Row>
						{characters.map((character) => (
							<Col lg={3} md={4} key={character.name} className='mb-2'>
								<CharacterCard data={character} />
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default Home;
