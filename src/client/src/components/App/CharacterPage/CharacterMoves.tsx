import { useContext, useState } from 'react';

import { Button, Col, Row } from 'react-bootstrap';

import { AuthContext } from '../../../store/auth-context';

import Move from './Move';

type Props = { data: ICharacter };
const CharacterMoves: React.FC<Props> = ({ data }) => {
	const [normals, setNormals] = useState<INormal[]>(data.moves?.normals ?? []);
	const [specials, setSpecials] = useState<ISpecial[]>(data.moves?.specials ?? []);
	const [supers, setSupers] = useState<ISuper[]>(data.moves?.supers ?? []);

	const { isLogged } = useContext(AuthContext);

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
			<Row className='pt-1 pb-0 px-1 border-bottom justify-content-between' as='header'>
				<Col>
					<h3>Movelist</h3>
				</Col>
				{isLogged && (
					<Col lg={3} md={4} sm={4} xs={6}>
						<Button className='w-100' variant='primary'>
							+ Move
						</Button>
					</Col>
				)}
			</Row>
			<Row className='py-2'>
				<Col>
					<section id='normals'>
						<h4>
							<a href='#normals'>Normals</a>
						</h4>
						<ul>
							{normals.length === 0 && <span>No moves to show</span>}
							{normals.map((val) => (
								<Move data={val} />
							))}
						</ul>
					</section>
					<section id='specials'>
						<h4>
							<a href='#specials'>Specials</a>
						</h4>
						<ul>
							{specials.length === 0 && <span>No moves to show</span>}
							{specials.map((val) => (
								<Move data={val} />
							))}
						</ul>
					</section>
					<section id='supers'>
						<h4>
							<a href='#supers'>Supers</a>
						</h4>
						<ul>
							{supers.length === 0 && <span>No moves to show</span>}
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
