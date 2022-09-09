import { useContext, useState } from 'react';
import { Card, Col, FloatingLabel, Form, Row, Table } from 'react-bootstrap';
import { AuthContext } from '../../../store/auth-context';
import { PageSubsection } from '../Sections';
import PageSubdivision from '../Sections/PageSubdivision';

import styles from './index.module.css';

type Props = { data: INormal | ISpecial | ISuper };
const Move: React.FC<Props> = ({ data }) => {
	const [name, setName] = useState(data.name);
	const [input, setInput] = useState(data.input);
	const [category, setCategory] = useState(data.category);
	const [guard, setGuard] = useState(data.guard);

	const [edit, setEdit] = useState(false);

	const { isLogged } = useContext(AuthContext);

	const enableEdit = () => setEdit(true);
	const disableEdit = () => setEdit(false);

	const updateMovelist = () => console.log({ name, input, category, guard });

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
								<Row>
									<Form.Group as={Col} sm={6} className='my-2'>
										<FloatingLabel label='Name'>
											<Form.Control type='text' value={name} onChange={(e) => setName(e.target.value)} disabled={!edit} />
										</FloatingLabel>
									</Form.Group>
									<Form.Group as={Col} className='my-2'>
										<FloatingLabel label='Input'>
											<Form.Control type='text' value={input} onChange={(e) => setInput(e.target.value)} required disabled={!edit} />
										</FloatingLabel>
									</Form.Group>
								</Row>
								<Row>
									<Form.Group as={Col} sm={6} className='my-2'>
										<FloatingLabel label='Category'>
											<Form.Select value={category} onChange={(e) => setCategory(e.target.value)} disabled={!edit}>
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
							</Form>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</PageSubdivision>
	);
};

export default Move;
