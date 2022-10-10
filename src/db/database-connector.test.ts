import { describe, expect, it } from 'vitest';
import DoNotInstantiateError from '../errors/do-not-instantiate-error';
import DatabaseConnector from './database-connector';

describe('Create an instance', () => {
	it('Should throw when using new', () => {
		// @ts-ignore
		expect(() => new DatabaseConnector()).toThrowError(DoNotInstantiateError);
	});
});
