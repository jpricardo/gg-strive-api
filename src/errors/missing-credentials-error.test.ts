import { expect, test } from 'vitest';
import MissingCredentialsError from './missing-credentials-error';

test('Create an instance', () => {
	const instance = new MissingCredentialsError();
	expect(instance).toBeInstanceOf(MissingCredentialsError);
});

test('Throw an instance', () => {
	const instance = new MissingCredentialsError();
	expect(() => {
		throw instance;
	}).toThrowError(MissingCredentialsError);
});
