import { expect, test } from 'vitest';
import NotImplementedError from './not-implemented-error';

test('Create an instance', () => {
	const instance = new NotImplementedError();
	expect(instance).toBeInstanceOf(NotImplementedError);
});

test('Throw an instance', () => {
	const instance = new NotImplementedError();
	expect(() => {
		throw instance;
	}).toThrowError(NotImplementedError);
});
