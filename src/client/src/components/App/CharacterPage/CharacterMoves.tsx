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

	const { updateCharacterByName } = useContext(ApiContext);
	const { refreshData } = useContext(DataContext);

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	const { isLogged } = useContext(AuthContext);

	useEffect(() => {
		reloadMoves();
	}, [data.name]);

	const reloadMoves = () => setMoves(data.moves);

	const doUpdateCharacter = (moveList: IMoveList) => {
		const payload = { ...data, moves: moveList };

		updateCharacterByName &&
			updateCharacterByName(data.name, payload)
				.then((res) => {
					console.log(res.data);
					refreshData();
				})
				.catch(console.error);
	};

	const addMove = (move: INormal | ISpecial | ICommandNormal | ISuper, moveType: string) => {
		if (moveType === '' || move.category === '') throw new Error('Missing parameters!');
		if (move.name?.trim() === '') move.name = move.input;
		switch (moveType) {
			case 'Normal':
				setMoves((prevState) => {
					const newMoves = { ...prevState, normals: [...prevState.normals, move] };
					doUpdateCharacter(newMoves);
					return newMoves;
				});
				break;

			case 'Command Normal':
				setMoves((prevState) => {
					const newMoves = { ...prevState, commandNormals: [...prevState.commandNormals, move] };
					doUpdateCharacter(newMoves);
					return newMoves;
				});
				break;
			case 'Special':
				setMoves((prevState) => {
					const newMoves = { ...prevState, specials: [...prevState.specials, move] };
					doUpdateCharacter(newMoves);
					return newMoves;
				});
				break;

			case 'Super':
				setMoves((prevState) => {
					const newMoves = { ...prevState, supers: [...prevState.supers, move] };
					doUpdateCharacter(newMoves);
					return newMoves;
				});
				break;

			default:
				throw new Error('Invalid Move Type');
		}
	};

	return (
		<PageSection id='movelist' title='Movelist' header={isLogged && <Button onClick={openModal}>Add Move</Button>} border>
			<PageSubsection id='normals' title='Normals'>
				<MoveList items={moves.normals} characterName={data.name} />
			</PageSubsection>
			<PageSubsection id='command-normals' title='Command Normals'>
				<MoveList items={moves.commandNormals} characterName={data.name} />
			</PageSubsection>
			<PageSubsection id='specials' title='Specials'>
				<MoveList items={moves.specials} characterName={data.name} />
			</PageSubsection>
			<PageSubsection id='supers' title='Supers'>
				<MoveList items={moves.supers} characterName={data.name} />
			</PageSubsection>
			<AddMoveModal show={showModal} handleClose={closeModal} handleSubmit={addMove} />
		</PageSection>
	);
};

export default CharacterMoves;
