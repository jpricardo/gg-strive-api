import { Card, Col, Row } from 'react-bootstrap';
import { PageSection } from '../Sections';
import styles from './index.module.css';
import UpdateCharacterForm from './UpdateCharacterForm';

const capitalizeWords = (str: string) => {
	const arr = str.split(' ');
	return arr
		.map((element) => {
			return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
		})
		.join(' ');
};

type Props = { data: ICharacter };
const CharacterInfoCard: React.FC<Props> = ({ data }) => {
	return (
		<PageSection title={capitalizeWords(data.displayName)} id={data.name}>
			<Card className={styles.card + ' p-0'}>
				<Card.Body className='p-3'>
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
		</PageSection>
	);
};

export default CharacterInfoCard;
