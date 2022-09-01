import { Badge } from 'react-bootstrap';
import styles from './index.module.css';

type Props = { className?: string; children: React.ReactNode };
const BattleTypeBadge: React.FC<Props> = ({ className, children }) => {
	return <Badge className={styles.typeBadge + ' ' + className}>{children}</Badge>;
};

export default BattleTypeBadge;
