import { FormEventHandler, useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';

type Props = { show: boolean; handleClose: () => void; handleSubmit: (move: IMove, moveType: string) => void };
const AddMoveModal: React.FC<Props> = ({ show, handleClose, handleSubmit }) => {
	const [moveType, setMoveType] = useState('');
	const [input, setInput] = useState('');
	const [guard, setGuard] = useState('');
	const [category, setCategory] = useState('');
	const [name, setName] = useState('');

	const doSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		const move = { input, guard, moveType, category, name };
		try {
			handleSubmit(move, moveType);
			resetForms();
			handleClose();
		} catch (err) {
			console.error(err);
		}
	};

	const resetForms = () => {
		setMoveType('');
		setInput('');
		setGuard('');
		setCategory('');
		setName('');
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Body>
				<Row>
					<Col>
						<h3>Add Move</h3>
					</Col>
				</Row>
				<Form onSubmit={(e) => doSubmit(e)}>
					<Form.Group className='my-2'>
						<FloatingLabel label='Category'>
							<Form.Select value={category} onChange={(e) => setCategory(e.target.value)} required>
								<option value=''>-</option>
								<option>Normal</option>
								<option>Command Normal</option>
								<option>Special</option>
								<option>Super</option>
							</Form.Select>
						</FloatingLabel>
					</Form.Group>

					<Form.Group className='my-2'>
						<FloatingLabel label='Name'>
							<Form.Control type='text' value={name} onChange={(e) => setName(e.target.value)} required />
						</FloatingLabel>
					</Form.Group>
					<Form.Group className='my-2'>
						<FloatingLabel label='Input'>
							<Form.Control type='text' value={input} onChange={(e) => setInput(e.target.value)} required />
						</FloatingLabel>
					</Form.Group>
					<Form.Group className='my-2'>
						<FloatingLabel label='Type'>
							<Form.Select value={moveType} onChange={(e) => setMoveType(e.target.value)}>
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
					<Form.Group className='my-2'>
						<FloatingLabel label='Guard'>
							<Form.Select value={guard} onChange={(e) => setGuard(e.target.value)}>
								<option value=''>-</option>
								<option value='All'>All</option>
								<option value='Crouching'>Crouching</option>
								<option value='Standing'>Standing</option>
								<option value='Unblockable'>Unblockable</option>
							</Form.Select>
						</FloatingLabel>
					</Form.Group>
					<Row>
						<Col>
							<Button type='submit'>Submit</Button>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default AddMoveModal;
