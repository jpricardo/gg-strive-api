import { useState } from 'react';
import { Badge, Card, Col, Figure, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BattleTypeBadge } from '../Badges';
import { EditCharacterModal } from '../Modals';
import StarRating from '../StarRating';

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
						<Figure className={styles.figure}>
							<Figure.Image
								className={styles.portrait + ' w-100'}
								alt={`${data.name}'s portrait`}
								src={data.portrait?.img ?? 'https://icon-library.com/images/user-profile-icon/user-profile-icon-4.jpg'}
							/>
							<BattleTypeBadge className={styles.typeBadge}>{data.battleType}</BattleTypeBadge>
						</Figure>
					</Row>
					<Row>
						<Col>
							<StarRating amount={data.easyToUse} />
							{/* {data.easyToUse && <>{getStars()}</>} */}
						</Col>
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
