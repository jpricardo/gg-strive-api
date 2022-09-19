import { useContext, useEffect, useState } from 'react';
import { Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../store/auth-context';
import PageSubdivision from '../Sections/PageSubdivision';

import styles from './index.module.css';

type Props = { data: IMove; characterName: string; updateMove: (_id: string, move: IMove) => void };
const Move: React.FC<Props> = ({ data, updateMove, characterName }) => {
	const [name, setName] = useState(data.name);
	const [input, setInput] = useState(data.input);
	const [category, setCategory] = useState(data.category);
	const [moveType, setMoveType] = useState(data.moveType);
	const [guard, setGuard] = useState(data.guard);
	const [damage, setDamage] = useState(0);

	const frameData = data.frameData;

	const [onHit, setOnHit] = useState(frameData?.onHit ?? '');
	const [onBlock, setOnBlock] = useState(frameData?.onBlock ?? '');
	const [onCounterHit, setOnCounterHit] = useState(frameData?.onCounterHit ?? '');

	const [edit, setEdit] = useState(false);

	useEffect(() => {
		resetMove();
	}, [data]);

	const { isLogged } = useContext(AuthContext);

	const enableEdit = () => setEdit(true);
	const disableEdit = () => setEdit(false);

	const resetMove = () => {
		setName(data.name);
		setInput(data.input);
		setCategory(data.category);
		setMoveType(data.moveType);
		setGuard(data.guard);
		setDamage(0);

		setOnHit(data.frameData?.onHit ?? '');
		setOnBlock(data.frameData?.onBlock ?? '');
		setOnCounterHit(data.frameData?.onCounterHit ?? '');

		setEdit(false);
	};

	const updateMovelist = () => {
		const move = { ...data, name, input, category, moveType, guard, frameData: { ...data.frameData, onHit, onBlock, onCounterHit } };
		console.log(move);
		if (!data._id) return;
		updateMove(data._id, move);
	};

	const getHeader = () => {
		return edit ? (
			<span
				className={styles.editSpan}
				onClick={() => {
					updateMovelist();
					disableEdit();
				}}
			>
				Save Changes
			</span>
		) : (
			<span className={styles.editSpan} onClick={enableEdit}>
				Edit
			</span>
		);
	};

	return (
		<PageSubdivision className='p-0' id={data.name ?? data.input} title={data.name ?? data.input} header={isLogged && getHeader()}>
			<Card className={'p-0 ' + styles.card}>
				<Card.Body>
					<Row>
						<Col>
							<Form>
								<h4>Info</h4>
								<Row className='row-cols-1 row-cols-sm-2'>
									<Form.Group as={Col} className='my-2'>
										<FloatingLabel label='Name'>
											<Form.Control type='text' value={name} onChange={(e) => setName(e.target.value)} disabled={!edit} />
										</FloatingLabel>
									</Form.Group>
									<Form.Group as={Col} className='my-2'>
										<FloatingLabel label='Type'>
											<Form.Select value={moveType} onChange={(e) => setMoveType(e.target.value)} disabled={!edit}>
												<option value=''>-</option>
												<option value='Strike'>Strike</option>
												<option value='Throw'>Throw</option>
												<option value='Air Throw'>Air Throw</option>
												<option value='Movement'>Movement</option>
												<option value='Counter/Parry'>Counter/Parry</option>
												<option value='Projectile'>Projectile</option>
												<option value='Buff/Install'>Buff/Install</option>
											</Form.Select>
										</FloatingLabel>
									</Form.Group>
									<Form.Group as={Col} className='my-2'>
										<FloatingLabel label='Damage'>
											<Form.Control type='number' value={damage} min={0} step={1} onChange={(e) => setDamage(parseInt(e.target.value))} disabled={!edit} />
										</FloatingLabel>
									</Form.Group>
									<Form.Group as={Col} className='my-2'>
										<FloatingLabel label='Input'>
											<Form.Control type='text' value={input} onChange={(e) => setInput(e.target.value)} required disabled={!edit} />
										</FloatingLabel>
									</Form.Group>
									<Form.Group as={Col} className='my-2'>
										<FloatingLabel label='Guard'>
											<Form.Select value={guard} onChange={(e) => setGuard(e.target.value)} disabled={!edit}>
												<option value=''>-</option>
												<option value='All'>All</option>
												<option value='Crouching'>Crouching</option>
												<option value='Standing'>Standing</option>
												<option value='Unblockable'>Unblockable</option>
											</Form.Select>
										</FloatingLabel>
									</Form.Group>
								</Row>
								<h4>Frame Data</h4>
								<Row className='row-cols-2 row-cols-sm-2'>
									<Form.Group as={Col} className='my-2'>
										<FloatingLabel label='On Hit'>
											<Form.Control type='number' value={onHit} step={1} onChange={(e) => setOnHit(e.target.value)} disabled={!edit} />
										</FloatingLabel>
									</Form.Group>
									<Form.Group as={Col} className='my-2'>
										<FloatingLabel label='On Counter Hit'>
											<Form.Control type='number' value={onCounterHit} step={1} onChange={(e) => setOnCounterHit(e.target.value)} disabled={!edit} />
										</FloatingLabel>
									</Form.Group>
									<Form.Group as={Col} className='my-2'>
										<FloatingLabel label='On Block'>
											<Form.Control type='number' value={onBlock} step={1} onChange={(e) => setOnBlock(e.target.value)} disabled={!edit} />
										</FloatingLabel>
									</Form.Group>
								</Row>
							</Form>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</PageSubdivision>
	);
};

export default Move;
