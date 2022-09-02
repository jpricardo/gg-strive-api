import { Card, Col, Row } from 'react-bootstrap';
import styles from './index.module.css';
import UpdateCharacterForm from './UpdateCharacterForm';

type Props = { data: ICharacter };
const CharacterInfoCard: React.FC<Props> = ({ data }) => {
	return (
		<Card className={styles.characterInfoCard + ' mb-2'}>
			<Card.Body className='p-3'>
				<Row className='mt-0 mb-1'>
					<Card.Title className='my-0' as='h3'>
						{data.displayName}
					</Card.Title>
				</Row>
				<Row className='mt-0'>
					<Col className='text-center'>
						<Card.Img
							className={styles.portrait}
							src={data.portrait?.img}
							//src='https://www.guiltygear.com/ggst/en/wordpress/wp-content/uploads/2020/09/chara_pc_mll.webp'
							alt='Imagem do boneco'
						/>
					</Col>
				</Row>
				<UpdateCharacterForm data={data} />
			</Card.Body>
		</Card>
	);
};

export default CharacterInfoCard;
