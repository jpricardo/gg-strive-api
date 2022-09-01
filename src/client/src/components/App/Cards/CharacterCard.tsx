import { useState } from 'react';
import { Card, Col, Figure, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BattleTypeBadge } from '../Badges';
import { EditCharacterModal } from '../Modals';
import StarRating from '../StarRating';

import styles from './index.module.css';

type Props = { data: ICharacter };
const CharacterCard: React.FC<Props> = ({ data }) => {
	const [showModal, setShowModal] = useState(false);
	const navigate = useNavigate();

	const handleClick = () => navigate(`${data.name}`);
	const closeModal = () => setShowModal(false);

	return (
		<>
			<Card className={styles.card} onClick={handleClick}>
				<Card.Body className='p-1'>
					<Row style={{ marginBottom: '-25px' }}>
						<Figure className={styles.figure}>
							<Row>
								<Col>
									<div className={styles.displayName}>{data.displayName}</div>
								</Col>
							</Row>
							<Figure.Image
								className={styles.portrait + ' w-100'}
								alt={`${data.name}'s portrait`}
								src={data.portrait?.img ?? 'https://icon-library.com/images/user-profile-icon/user-profile-icon-4.jpg'}
							/>
							<BattleTypeBadge>{data.battleType}</BattleTypeBadge>
						</Figure>
					</Row>
					<Row>
						<Col>
							<StarRating amount={data.easyToUse} />
						</Col>
					</Row>
				</Card.Body>
			</Card>
			<EditCharacterModal data={data} show={showModal} handleClose={closeModal} />
		</>
	);
};

export default CharacterCard;
