import { Col, Row } from 'react-bootstrap';

type Props = { data: INormal | ISpecial | ISuper };
const Move: React.FC<Props> = ({ data }) => {
	return (
		<Row as='section'>
			<Col>{data.input}</Col>
		</Row>
	);
};

export default Move;
