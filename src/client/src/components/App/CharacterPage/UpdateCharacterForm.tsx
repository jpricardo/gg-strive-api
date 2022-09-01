import { createRef, FormEventHandler, useContext, useEffect, useState } from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

import { ApiContext } from '../../../store/api-context';
import { AuthContext } from '../../../store/auth-context';
import { DataContext } from '../../../store/data-context';
import { DeleteCharacterModal } from '../Modals';

type Props = { data: ICharacter };
const UpdateCharacterForm: React.FC<Props> = ({ data }) => {
	const [name, setName] = useState(data.name ?? '');
	const [displayName, setDisplayName] = useState(data.displayName ?? '');
	const [battleType, setBattleType] = useState(data.battleType ?? '');
	const [easyToUse, setEasyToUse] = useState(data.easyToUse ?? 5);
	const fileInput = createRef<HTMLInputElement>();

	const [showModal, setShowModal] = useState(false);
	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	const { updateCharacterByName } = useContext(ApiContext);
	const { refreshData, battleTypeOptions } = useContext(DataContext);
	const { isLogged } = useContext(AuthContext);

	useEffect(() => {
		resetForms();
	}, [data.name]);

	const getBase64 = (file: File): Promise<string> => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				resolve(reader.result as string);
			};
			reader.onerror = (error) => reject(error);
		});
	};

	const getFileInput = async () => {
		const files = fileInput.current?.files;
		if (!files?.length) return;
		return { name: files[0].name, img: await getBase64(files[0]) };
	};

	const handleSubmit: FormEventHandler = async (e) => {
		e.preventDefault();
		const portrait = await getFileInput();
		console.log(portrait);
		updateCharacterByName &&
			updateCharacterByName(name, { battleType, displayName, easyToUse, portrait })
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
		if (fileInput.current?.files) fileInput.current.value = '';
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				{isLogged && (
					<Form.Group className='my-2'>
						<Form.Control type='file' size='sm' ref={fileInput} />
					</Form.Group>
				)}
				<Form.Group className='my-1'>
					<FloatingLabel label='Name'>
						<Form.Control size='sm' type='text' value={name} disabled />
					</FloatingLabel>
				</Form.Group>
				<Form.Group className='my-1'>
					<FloatingLabel label='Display Name'>
						<Form.Control size='sm' type='text' value={displayName} onChange={(e) => setDisplayName(e.target.value)} required disabled={!isLogged} />
					</FloatingLabel>
				</Form.Group>
				<Form.Group className='my-1'>
					<FloatingLabel label='Battle Type'>
						<Form.Select size='sm' value={battleType} onChange={(e) => setBattleType(e.target.value)} required disabled={!isLogged}>
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
						<Form.Control type='number' value={easyToUse} onChange={(e) => setEasyToUse(parseInt(e.target.value))} required disabled={!isLogged} />
					</FloatingLabel>
				</Form.Group>
				{isLogged && (
					<>
						<Row className='justify-content-between my-1'>
							<Col lg={6} className='text-start mt-1'>
								<Button className='w-100 px-1' onClick={resetForms} variant='secondary'>
									Discard
								</Button>
							</Col>
							<Col lg={6} md={12} className='text-end mt-1'>
								<Button className='w-100 px-1' type='submit'>
									Update
								</Button>
							</Col>
						</Row>
						<Row className='mt-3 mb-1'>
							<Col>
								<Button className='w-100' variant='danger' onClick={openModal}>
									Delete
								</Button>
							</Col>
						</Row>
					</>
				)}
			</Form>
			<DeleteCharacterModal data={data} show={showModal} handleClose={closeModal} />
		</>
	);
};

export default UpdateCharacterForm;
