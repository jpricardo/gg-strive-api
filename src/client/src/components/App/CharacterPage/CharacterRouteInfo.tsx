import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { Badge, Card, Col, Row } from 'react-bootstrap';

import { DataContext } from '../../../store/data-context';

import { PageSection, PageSubsection } from '../Sections';

import styles from './index.module.css';

const prettifyObject = (obj: any) => {
	const newObj = structuredClone(obj);
	Object.entries(obj).forEach(([key, value]) => {
		let property = value;
		if (property === null) {
			return property;
		}
		if (typeof property === 'object') {
			if (Array.isArray(property)) {
				if (typeof property[0] === 'object') {
					newObj[key] = [prettifyObject(property[0])];
				} else {
					newObj[key] = [typeof property[0]];
				}
			} else {
				newObj[key] = prettifyObject(property);
			}
		} else {
			newObj[key] = typeof property;
		}
	});
	return newObj;
};

type Props = { data: ICharacter };
const CharacterRouteInfo: React.FC<Props> = ({ data }) => {
	const location = useLocation();
	const { characters } = useContext(DataContext);

	return (
		<PageSection id='api-route' title='Api Route' border>
			<PageSubsection id='endpoint' title='Endpoint'>
				<Card className='p-0'>
					<Card.Body>
						<Row className='justify-content-between'>
							<Col>
								<Badge className={styles.methodBadge}>GET</Badge>
								<code>/api/v1{location.pathname}</code>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</PageSubsection>
			<PageSubsection id='response' title='Response'>
				<Card className='p-0'>
					<Card.Body>
						<Row>
							<Col>
								<pre>{JSON.stringify(prettifyObject(characters[0]), null, 2)}</pre>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</PageSubsection>
		</PageSection>
	);
};

export default CharacterRouteInfo;
