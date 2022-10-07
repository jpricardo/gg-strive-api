import { expect, test } from 'vitest';
import InvalidUriError from './invalid-uri-string';

test('Create an instance', () => {
	const instance = new InvalidUriError();
	expect(instance).toBeInstanceOf(InvalidUriError);
});

test('Throw an instance', () => {
	const instance = new InvalidUriError();
	expect(() => {
		throw instance;
	}).toThrowError(InvalidUriError);
});
