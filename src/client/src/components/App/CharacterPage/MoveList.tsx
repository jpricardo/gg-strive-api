import Move from './Move';

type Props = { items: Array<INormal | ICommandNormal | ISpecial | ISuper> };
const MoveList: React.FC<Props> = ({ items }) => {
	return (
		<>
			{items.length === 0 && <span>No moves to be shown...</span>}
			{items.map((val) => (
				<Move key={val.input} data={val} />
			))}
		</>
	);
};

export default MoveList;
