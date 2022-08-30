import { Button, Col, Row } from 'react-bootstrap';

type Props = { data: ICharacter };
const CharacterMoves: React.FC<Props> = ({ data }) => {
	return (
		<>
			<Row className='pb-2 border-bottom justify-content-between' as='header'>
				<Col>
					<h3>Moves</h3>
				</Col>
				<Col lg={3} md={4} sm={4} xs={6}>
					<Button className='w-100' variant='primary'>
						+ Move
					</Button>
				</Col>
			</Row>
			<Row>
				<Col></Col>
			</Row>
		</>
	);
};

export default CharacterMoves;
