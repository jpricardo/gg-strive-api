import { FormEventHandler, useContext, useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { ApiContext } from '../../../store/api-context';
import { DataContext } from '../../../store/data-context';

type Props = {
	show: boolean;
	handleClose: () => void;
};
const AddCharacterModal: React.FC<Props> = ({ show, handleClose }) => {
	const [name, setName] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [battleType, setBattleType] = useState('');
	const [easyToUse, setEasyToUse] = useState(5);

	const { createCharacter } = useContext(ApiContext);
	const { refreshData, battleTypeOptions } = useContext(DataContext);

	const handleSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		createCharacter({ name, battleType, displayName, easyToUse })
			.then((res) => {
				console.log(res);
				resetAndClose();
				refreshData();
			})
			.catch(console.error);
	};

	const resetForms = () => {
		setName('');
		setBattleType('');
		setDisplayName('');
		setEasyToUse(5);
	};

	const resetAndClose = () => {
		resetForms();
		handleClose();
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control type='text' value={name} onChange={(e) => setName(e.target.value.trim().toLocaleLowerCase())} required />
					</Form.Group>
					<Form.Group>
						<Form.Label>Display Name</Form.Label>
						<Form.Control type='text' value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
					</Form.Group>
					<Form.Group>
						<Form.Label>Battle Type</Form.Label>
						<Form.Select value={battleType} onChange={(e) => setBattleType(e.target.value)} required>
							<option value=''>-</option>
							{battleTypeOptions.map((val) => (
								<option value={val} key={val}>
									{val}
								</option>
							))}
						</Form.Select>
					</Form.Group>
					<Form.Group>
						<Form.Label>Easy to Use</Form.Label>
						<Form.Control type='number' value={easyToUse} onChange={(e) => setEasyToUse(parseInt(e.target.value))} required />
					</Form.Group>
					<Row className='justify-content-between mt-3'>
						<Col className='text-start'>
							<Button onClick={resetAndClose} variant='secondary'>
								Descartar
							</Button>
						</Col>
						<Col className='text-end'>
							<Button type='submit'>Enviar</Button>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default AddCharacterModal;
