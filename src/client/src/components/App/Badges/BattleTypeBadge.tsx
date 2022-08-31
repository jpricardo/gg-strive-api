import { Badge } from 'react-bootstrap';

type Props = { className?: string; children: React.ReactNode };
const BattleTypeBadge: React.FC<Props> = ({ className, children }) => {
	return <Badge className={'' + className}>{children}</Badge>;
};

export default BattleTypeBadge;
