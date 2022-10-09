import { expect, test } from 'vitest';
import AlreadyConnectedError from './already-connected-error';

test('Create an instance', () => {
	const instance = new AlreadyConnectedError();
	expect(instance).toBeInstanceOf(AlreadyConnectedError);
});

test('Throw an instance', () => {
	const instance = new AlreadyConnectedError();
	expect(() => {
		throw instance;
	}).toThrowError(AlreadyConnectedError);
});
