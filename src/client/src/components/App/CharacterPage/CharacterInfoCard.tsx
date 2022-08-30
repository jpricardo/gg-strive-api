import { Card, Col, Row } from 'react-bootstrap';
import UpdateCharacterForm from './UpdateCharacterForm';
import styles from './index.module.css';

type Props = { data: ICharacter };
const CharacterInfoCard: React.FC<Props> = ({ data }) => {
	return (
		<Card className='mb-3'>
			<Card.Header className='py-1'>
				<Card.Title className='m-0' as='h3'>
					{data.displayName}
				</Card.Title>
			</Card.Header>
			<Card.Body className='py-1'>
				<Row>
					<Col className='text-center'>
						<Card.Img
							className={styles.portrait}
							src='https://www.guiltygear.com/ggst/en/wordpress/wp-content/uploads/2020/09/chara_pc_mll.webp'
							alt='Imagem do boneco'
							height={200}
						/>
					</Col>
				</Row>
				<UpdateCharacterForm data={data} />
			</Card.Body>
		</Card>
	);
};

export default CharacterInfoCard;
