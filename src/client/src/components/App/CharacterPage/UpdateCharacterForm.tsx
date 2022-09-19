import { createRef, FormEventHandler, useContext, useEffect, useState } from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

import { ApiContext } from '../../../store/api-context';
import { AuthContext } from '../../../store/auth-context';
import { DataContext } from '../../../store/data-context';
import { DeleteCharacterModal } from '../Modals';

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

type Props = { data: ICharacter };
const UpdateCharacterForm: React.FC<Props> = ({ data }) => {
	const [name, setName] = useState(data.name ?? '');
	const [displayName, setDisplayName] = useState(data.displayName ?? '');
	const [battleType, setBattleType] = useState<BattleType | string>(data.battleType ?? '');
	const [easyToUse, setEasyToUse] = useState(data.easyToUse ?? 5);
	const [moves, setMoves] = useState(data.moves ?? []);

	const [edit, setEdit] = useState(false);
	const allowEdit = () => setEdit(true);

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

	const getFileInput = async () => {
		const files = fileInput.current?.files;
		if (!files?.length) return;
		return { name: files[0].name, img: await getBase64(files[0]) };
	};

	const handleSubmit: FormEventHandler = async (e) => {
		e.preventDefault();
		const portrait = await getFileInput();
		updateCharacterByName &&
			updateCharacterByName(name, { battleType: battleType as BattleType, displayName, easyToUse, portrait, moves })
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
		setEdit(false);
		if (fileInput.current?.files) fileInput.current.value = '';
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				{edit && (
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
						<Form.Control size='sm' type='text' value={displayName} onChange={(e) => setDisplayName(e.target.value)} required disabled={!edit} />
					</FloatingLabel>
				</Form.Group>
				<Form.Group className='my-1'>
					<FloatingLabel label='Battle Type'>
						<Form.Select size='sm' value={battleType} onChange={(e) => setBattleType(e.target.value)} required disabled={!edit}>
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
						<Form.Control type='number' value={easyToUse} onChange={(e) => setEasyToUse(parseInt(e.target.value))} required disabled={!edit} />
					</FloatingLabel>
				</Form.Group>
				<div className='mt-2 mb-0'>
					{isLogged && !edit && (
						<Row>
							<Col className='mt-1'>
								<Button className='w-100' onClick={allowEdit}>
									Edit
								</Button>
							</Col>
						</Row>
					)}
					{edit && (
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
							<Row className='mt-2 mb-0'>
								<Col>
									<Button className='w-100' variant='danger' onClick={openModal}>
										Delete
									</Button>
								</Col>
							</Row>
						</>
					)}
				</div>
			</Form>
			<DeleteCharacterModal data={data} show={showModal} handleClose={closeModal} />
		</>
	);
};

export default UpdateCharacterForm;
