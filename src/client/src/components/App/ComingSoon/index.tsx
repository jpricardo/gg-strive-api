import { Col, Row } from 'react-bootstrap';
import styles from './index.module.css';

const ComingSoon = () => {
	return (
		<Row as='section'>
			<Col>
				<Row as='header' className={styles.header}>
					<h1>Coming Soon...</h1>
					<h2>Keep on Rocking!</h2>
				</Row>
			</Col>
		</Row>
	);
};

export default ComingSoon;
