import { useContext } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../../../store/api-context';
import { DataContext } from '../../../store/data-context';

type Props = { data: ICharacter; show: boolean; handleClose: () => void };
const DeleteCharacterModal: React.FC<Props> = ({ data, show, handleClose }) => {
	const navigate = useNavigate();

	const { deleteCharacterByName } = useContext(ApiContext);
	const { refreshData } = useContext(DataContext);

	const handleDelete = () => {
		deleteCharacterByName &&
			deleteCharacterByName(data.name)
				.then((res) => {
					handleClose();
					refreshData();
					navigate('/', { replace: true });
				})
				.catch(console.error);
	};
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header>
				<Modal.Title>Are you sure?</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row>
					<Col>Do you really want to delete character {data.displayName}?</Col>
				</Row>
				<Row className='justify-content-center mt-2'>
					<Col>
						<Button className='w-100' variant='secondary' onClick={handleClose}>
							No, wait!
						</Button>
					</Col>
					<Col>
						<Button className='w-100' variant='danger' onClick={handleDelete}>
							Yes, pull the trigger!
						</Button>
					</Col>
				</Row>
			</Modal.Body>
		</Modal>
	);
};

export default DeleteCharacterModal;
