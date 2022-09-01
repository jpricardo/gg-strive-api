import { Card, Col, Row } from 'react-bootstrap';

import styles from './index.module.css';

type Props = { onClick: () => void };
const AddCharacterCard: React.FC<Props> = ({ onClick }) => {
	const handleClick = () => {
		onClick && onClick();
	};

	return (
		<>
			<Card className={styles.card + ' shadow'} onClick={handleClick}>
				<Card.Body className='p-2'>
					<Row className='h-100 justify-content-center'>
						<Col className='text-center m-auto'>
							<span className={styles.addText}>+ Character</span>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</>
	);
};

export default AddCharacterCard;
