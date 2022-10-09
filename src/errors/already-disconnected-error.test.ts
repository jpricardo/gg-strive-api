import { expect, test } from 'vitest';
import AlreadyDisconnectedError from './already-disconnected-error';

test('Create an instance', () => {
	const instance = new AlreadyDisconnectedError();
	expect(instance).toBeInstanceOf(AlreadyDisconnectedError);
});

test('Throw an instance', () => {
	const instance = new AlreadyDisconnectedError();
	expect(() => {
		throw instance;
	}).toThrowError(AlreadyDisconnectedError);
});
