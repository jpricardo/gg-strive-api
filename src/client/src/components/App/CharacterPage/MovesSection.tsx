import { Row } from 'react-bootstrap';

type Props = { items: any[]; title: string };
const MovesSection: React.FC<Props> = ({ items, title }) => {
	return <Row as='section'></Row>;
};

export default MovesSection;
