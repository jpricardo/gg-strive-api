import Move from './Move';

type Props = { items: Array<INormal | ICommandNormal | ISpecial | ISuper>; characterName: string };
const MoveList: React.FC<Props> = ({ items, characterName }) => {
	return (
		<>
			{items.length === 0 && <span>No moves to be shown...</span>}
			{items.map((val) => (
				<Move key={val._id} data={val} />
			))}
		</>
	);
};

export default MoveList;
