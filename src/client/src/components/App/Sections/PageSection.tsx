import { Col, Row } from 'react-bootstrap';

import styles from './index.module.css';

type Props = { id: string; title: string; header?: React.ReactNode; className?: string; border?: boolean; children?: React.ReactNode };
const PageSection: React.FC<Props> = ({ id, title, header, children, className = '', border = false }) => {
	return (
		<Row as='section' id={id} className={'pt-1 pb-0 mx-1 ' + styles.section + ' ' + className}>
			<Col className={border ? 'border-bottom' : '' + ' py-0'}>
				<Row className='justify-content-between'>
					<Col>
						<h3>
							<a href={'#' + id}>{title}</a>
						</h3>
					</Col>
					{header && <Col className='text-end'>{header}</Col>}
				</Row>
			</Col>
			{children}
		</Row>
	);
};

export default PageSection;
