import { useState } from 'react';
import { Card, Col, Figure, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { EditCharacterModal } from '../Modals';

import styles from './index.module.css';

type Props = { data: ICharacter };
const CharacterCard: React.FC<Props> = ({ data }) => {
	const [showModal, setShowModal] = useState(false);
	const navigate = useNavigate();

	const handleClick = () => navigate(`character/${data.name}`);
	const closeModal = () => setShowModal(false);

	const getStars = () => {
		const stars = [];
		for (let i = 0; i < data.easyToUse; i++) {
			stars.push(<span key={i}>⭐</span>);
		}
		return stars;
	};

	return (
		<>
			<Card className={styles.card} onClick={handleClick}>
				<Card.Body className='p-2'>
					<Row>
						<Figure>
							<Figure.Image
								className='w-100'
								alt={`${data.name}'s portrait`}
								src={data.portrait?.img ?? 'https://icon-library.com/images/user-profile-icon/user-profile-icon-4.jpg'}
							/>
						</Figure>
					</Row>
					<Row>
						<Col>{data.easyToUse && <>{getStars()}</>}</Col>
						<Col className='text-center'>{data.battleType && <>{data.battleType}</>}</Col>
					</Row>
				</Card.Body>
				<Card.Footer>
					<Row>
						<Col>{data.displayName}</Col>
					</Row>
				</Card.Footer>
			</Card>
			<EditCharacterModal data={data} show={showModal} handleClose={closeModal} />
		</>
	);
};

export default CharacterCard;
