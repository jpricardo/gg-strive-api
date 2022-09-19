import Move from './Move';

type Props = { items: MoveList; characterName: string; updateMove: (_id: string, move: IMove) => void };
const MoveList: React.FC<Props> = ({ items, characterName, updateMove }) => {
	return (
		<>
			{items.length === 0 && <span>No moves to be shown...</span>}
			{items.map((val) => (
				<Move key={characterName + val._id} data={val} updateMove={updateMove} characterName={characterName} />
			))}
		</>
	);
};

export default MoveList;
