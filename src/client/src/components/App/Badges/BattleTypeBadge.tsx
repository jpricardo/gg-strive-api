import { Badge } from 'react-bootstrap';
import styles from './index.module.css';

type Props = { className?: string; variant: BattleType };
const BattleTypeBadge: React.FC<Props> = ({ className, variant }) => {
	const classes = [styles[variant.replaceAll(' ', '')], styles.typeBadge, className].filter((name) => name);
	return <Badge className={classes.join(' ')}>{variant}</Badge>;
};

export default BattleTypeBadge;
