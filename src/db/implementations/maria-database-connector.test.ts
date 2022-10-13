import { it, describe, expect } from 'vitest';
import MariaDatabaseConnector, { IDatabaseOptions } from './maria-database-connector';

const validProps: IDatabaseOptions = {
	user: 'test',
	password: 'test',
};

describe('Valid options', () => {
	it('should create an instance', () => {
		const props = { ...validProps };
		const instance = new MariaDatabaseConnector(props);

		expect(instance).toBeInstanceOf(MariaDatabaseConnector);
	});
});
