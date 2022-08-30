import { FormEventHandler, useContext, useEffect, useState } from 'react';
import { Modal, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import { ApiContext } from '../../../store/api-context';
import { DataContext } from '../../../store/data-context';

type Props = { data: ICharacter };
const UpdateCharacterForm: React.FC<Props> = ({ data }) => {
	const [name, setName] = useState(data.name ?? '');
	const [displayName, setDisplayName] = useState(data.displayName ?? '');
	const [battleType, setBattleType] = useState(data.battleType ?? '');
	const [easyToUse, setEasyToUse] = useState(data.easyToUse ?? 5);

	const { updateCharacterByName } = useContext(ApiContext);
	const { refreshData } = useContext(DataContext);

	const battleTypeOptions = ['Balance', 'Long Range', 'High Speed', 'Power Throw', 'Unique', 'Technical', 'Shooting', 'One Shot', 'Rush', 'Power'].sort(
		(a, b) => a.localeCompare(b)
	);

	useEffect(() => {
		resetForms();
	}, [data.name]);

	const handleSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		updateCharacterByName(name, { battleType, displayName, easyToUse })
			.then((res) => {
				console.log(res);
				refreshData();
			})
			.catch(console.error);
	};

	const resetForms = () => {
		setName(data.name ?? '');
		setBattleType(data.battleType ?? '');
		setDisplayName(data.displayName ?? '');
		setEasyToUse(data.easyToUse ?? 5);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className='my-1'>
				<FloatingLabel label='Name'>
					<Form.Control size='sm' type='text' value={name} disabled />
				</FloatingLabel>
			</Form.Group>
			<Form.Group className='my-1'>
				<FloatingLabel label='Display Name'>
					<Form.Control size='sm' type='text' value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
				</FloatingLabel>
			</Form.Group>
			<Form.Group className='my-1'>
				<FloatingLabel label='Battle Type'>
					<Form.Select size='sm' value={battleType} onChange={(e) => setBattleType(e.target.value)} required>
						{battleTypeOptions.map((val) => (
							<option value={val} key={val}>
								{val}
							</option>
						))}
					</Form.Select>
				</FloatingLabel>
			</Form.Group>
			<Form.Group className='my-1'>
				<FloatingLabel label='Easy to Use'>
					<Form.Control type='number' value={easyToUse} onChange={(e) => setEasyToUse(parseInt(e.target.value))} required />
				</FloatingLabel>
			</Form.Group>
			<Row className='justify-content-between my-1'>
				<Col lg={5} className='text-start mt-1'>
					<Button className='w-100' onClick={resetForms} variant='secondary'>
						Descartar
					</Button>
				</Col>
				<Col lg={5} className='text-end mt-1'>
					<Button className='w-100' type='submit'>
						Enviar
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default UpdateCharacterForm;
