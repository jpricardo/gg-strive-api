import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../../../store/data-context';
import CharacterInfoCard from './CharacterInfoCard';
import CharacterMoves from './CharacterMoves';
import UpdateCharacterForm from './UpdateCharacterForm';

const CharacterPage = () => {
	const [character, setCharacter] = useState<ICharacter>();
	const [previousCharacter, setPreviousCharacter] = useState<ICharacter>();
	const [nextCharacter, setNextCharacter] = useState<ICharacter>();

	const params = useParams();
	const { characters, isLoading } = useContext(DataContext);

	useEffect(() => {
		setCharacter(getCharacterData());
	}, [isLoading, params.name, character?.name]);

	useEffect(() => {
		getRelatedCharacters();
	}, [character?.name]);

	const getCharacterData = () => {
		const character = characters.find((character) => character?.name === params.name);
		return character;
	};

	const getCharacterIndex = () => {
		if (!character) return 0;
		return characters.map((val) => val.name).indexOf(character.name);
	};

	const getRelatedCharacters = () => {
		const index = getCharacterIndex();
		setPreviousCharacter(characters[index - 1]);
		setNextCharacter(characters[index + 1]);
	};

	return (
		<>
			<Row as='header' className='mb-2'>
				<Row className='justify-content-between'>
					<Col className='text-start'>
						{previousCharacter && <Link to={`/admin/character/${previousCharacter?.name}`}>{previousCharacter.displayName}</Link>}
					</Col>
					<Col className='text-end'>{nextCharacter && <Link to={`/admin/character/${nextCharacter?.name}`}>{nextCharacter.displayName}</Link>}</Col>
				</Row>
			</Row>
			<Row as='section'>
				<Col md={4}>{character && <CharacterInfoCard data={character} />}</Col>
				<Col>{character && <CharacterMoves data={character} />}</Col>
			</Row>
		</>
	);
};

export default CharacterPage;
