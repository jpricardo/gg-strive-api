import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Move from './Move';

type Props = { data: ICharacter };
const CharacterMoves: React.FC<Props> = ({ data }) => {
	const [normals, setNormals] = useState<INormal[]>(data.moves?.normals ?? []);
	const [specials, setSpecials] = useState<ISpecial[]>(data.moves?.specials ?? []);
	const [supers, setSupers] = useState<ISuper[]>(data.moves?.supers ?? []);

	const addNormal = (move: INormal) => {
		setNormals((prevValue) => [move, ...prevValue]);
	};

	const addSpecial = (move: ISpecial) => {
		setSpecials((prevValue) => [move, ...prevValue]);
	};

	const addSuper = (move: ISuper) => {
		setSupers((prevValue) => [move, ...prevValue]);
	};

	return (
		<>
			<Row className='pb-2 px-1 border-bottom justify-content-between' as='header'>
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
				<Col>
					<section>
						<h4>Normals</h4>
						<ul>
							{normals.map((val) => (
								<Move data={val} />
							))}
						</ul>
					</section>
					<section>
						<h4>Specials</h4>
						<ul>
							{specials.map((val) => (
								<Move data={val} />
							))}
						</ul>
					</section>
					<section>
						<h4>Supers</h4>
						<ul>
							{supers.map((val) => (
								<Move data={val} />
							))}
						</ul>
					</section>
				</Col>
			</Row>
		</>
	);
};

export default CharacterMoves;
