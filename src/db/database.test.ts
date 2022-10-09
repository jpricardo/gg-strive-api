import { describe, expect, it, test } from 'vitest';
import DataBase from './database';
import DatabaseConnector from './database-connector';

describe('Valid instance', () => {
	it('Creates an instance', () => {
		const instance = new DataBase();
		expect(instance).toBeInstanceOf(DataBase);
	});

	it('Gets the connector', () => {
		const instance = new DataBase();
		const connector = instance.getConnector();
		expect(connector).toBeInstanceOf(DatabaseConnector);
	});
});

// TODO instantiate with missing credentials
