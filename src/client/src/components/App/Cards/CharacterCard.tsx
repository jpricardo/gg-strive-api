import { useState } from 'react';
import { Card, Col, Figure, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BattleTypeBadge } from '../Badges';
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
					<Row className='gy-0' style={{ marginBottom: '-25px' }}>
						<Col>
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
								<BattleTypeBadge variant={data.battleType as BattleType} />
							</Figure>
						</Col>
					</Row>
					<Row className='gy-0'>
						<Col>
							<StarRating amount={data.easyToUse} />
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</>
	);
};

export default CharacterCard;
