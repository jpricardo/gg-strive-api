import { Col, Row } from 'react-bootstrap';

type Props = { id: string; title: string; header?: React.ReactNode; className?: string; children?: React.ReactNode };
const PageSubsection: React.FC<Props> = ({ id, title, header, children, className = '' }) => {
	return (
		<Row as='section' id={id} className={className + ' py-2 ms-0'}>
			<Col>
				<h4>
					<a href={'#' + id}>{title}</a>
				</h4>
			</Col>
			{children}
		</Row>
	);
};

export default PageSubsection;
