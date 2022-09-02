import { Col, Row } from 'react-bootstrap';

type Props = { id: string; title: string; header?: React.ReactNode; className?: string; children?: React.ReactNode };
const PageSubdivision: React.FC<Props> = ({ id, title, header, children, className = '' }) => {
	return (
		<Row as='section' id={id} className={className + ' py-2 ms-0'}>
			<Col>
				<Row>
					<Col>
						<h5>
							<a href={'#' + id}>{title}</a>
						</h5>
					</Col>
					{header && <Col className='text-end'>{header}</Col>}
				</Row>
			</Col>
			{children}
		</Row>
	);
};

export default PageSubdivision;
