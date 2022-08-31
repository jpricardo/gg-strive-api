import { Card } from 'react-bootstrap';

import styles from './index.module.css';

type Props = { onClick: () => void };
const AddCharacterCard: React.FC<Props> = ({ onClick }) => {
	const handleClick = () => {
		onClick && onClick();
	};

	return (
		<>
			<Card className={styles.card + ' shadow'} onClick={handleClick}>
				<Card.Body className='p-2'>+ Character</Card.Body>
			</Card>
		</>
	);
};

export default AddCharacterCard;
