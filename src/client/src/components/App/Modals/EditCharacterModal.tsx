import { FormEventHandler, useContext, useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { ApiContext } from '../../../store/api-context';

type Props = {
	data: ICharacter;
	show: boolean;
	handleClose: () => void;
};
const EditCharacterModal: React.FC<Props> = ({ data, show, handleClose }) => {
	const [name, setName] = useState(data.name ?? '');
	const [displayName, setDisplayName] = useState(data.displayName ?? '');
	const [battleType, setBattleType] = useState(data.battleType ?? '');
	const [easyToUse, setEasyToUse] = useState(data.easyToUse ?? 5);

	const { updateCharacterByName } = useContext(ApiContext);

	const battleTypeOptions = ['Balance', 'Rush', 'Long Range', 'High Speed'];

	const handleSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		updateCharacterByName(name, { battleType, displayName, easyToUse })
			.then((res) => {
				console.log(res);
				resetAndClose();
			})
			.catch(console.error);
	};

	const resetForms = () => {
		setName(data.name ?? '');
		setBattleType(data.battleType ?? '');
		setDisplayName(data.displayName ?? '');
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
						<Form.Control type='text' value={name} disabled />
					</Form.Group>
					<Form.Group>
						<Form.Label>Display Name</Form.Label>
						<Form.Control type='text' value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
					</Form.Group>
					<Form.Group>
						<Form.Label>Battle Type</Form.Label>
						<Form.Select value={battleType} onChange={(e) => setBattleType(e.target.value)} required>
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

export default EditCharacterModal;
