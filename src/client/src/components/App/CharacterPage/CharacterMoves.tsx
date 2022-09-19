import { useContext, useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import { ApiContext } from '../../../store/api-context';

import { AuthContext } from '../../../store/auth-context';
import { DataContext } from '../../../store/data-context';
import { AddMoveModal } from '../Modals';
import { PageSection, PageSubsection } from '../Sections';

import MoveList from './MoveList';

type Props = { data: ICharacter };
const CharacterMoves: React.FC<Props> = ({ data }) => {
	const [moves, setMoves] = useState(data.moves);
	const [showModal, setShowModal] = useState(false);

	//const [normals, setNormals] = useState<IMove[]>([]);
	const normals = moves.filter((move) => move.category === 'Normal');
	const commandNormals = moves.filter((move) => move.category === 'Command Normal');
	const specials = moves.filter((move) => move.category === 'Special');
	const supers = moves.filter((move) => move.category === 'Super');

	const { updateCharacterByName } = useContext(ApiContext);
	const { refreshData } = useContext(DataContext);

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	const { isLogged } = useContext(AuthContext);

	useEffect(() => {
		reloadMoves();
	}, [data.name]);

	const reloadMoves = () => {
		setMoves(data.moves);
	};

	const doUpdateCharacter = (moveList: MoveList) => {
		const payload = { ...data, moves: moveList };
		updateCharacterByName &&
			updateCharacterByName(data.name, payload)
				.then((res) => {
					console.log(res.data);
					refreshData();
				})
				.catch(console.error);
	};

	const updateMove = (_id: string, move: IMove) => {
		setMoves((prevState) => {
			const newMoves = prevState.filter((move) => move._id !== _id);
			if (newMoves.length === prevState.length) return prevState;
			const newState = [...newMoves, move];
			doUpdateCharacter(newState);
			return newState;
		});
	};

	const addMove = (move: IMove) => {
		if (move.category === '') throw new Error('Missing parameters!');
		if (move.name?.trim() === '') move.name = move.input;
		setMoves((prevState) => {
			const newMoves = [...prevState, move];
			doUpdateCharacter(newMoves);
			return newMoves;
		});
	};

	return (
		<PageSection id='movelist' title='Movelist' header={isLogged && <Button onClick={openModal}>Add Move</Button>} border>
			<PageSubsection id='normals' title='Normals'>
				<MoveList items={normals} characterName={data.name} updateMove={updateMove} />
			</PageSubsection>
			<PageSubsection id='command-normals' title='Command Normals'>
				<MoveList items={commandNormals} characterName={data.name} updateMove={updateMove} />
			</PageSubsection>
			<PageSubsection id='specials' title='Specials'>
				<MoveList items={specials} characterName={data.name} updateMove={updateMove} />
			</PageSubsection>
			<PageSubsection id='supers' title='Supers'>
				<MoveList items={supers} characterName={data.name} updateMove={updateMove} />
			</PageSubsection>
			<AddMoveModal show={showModal} handleClose={closeModal} handleSubmit={addMove} />
		</PageSection>
	);
};

export default CharacterMoves;
