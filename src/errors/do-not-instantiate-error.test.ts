import { expect, test } from 'vitest';
import DoNotInstantiateError from './do-not-instantiate-error';

test('Create an instance', () => {
	const instance = new DoNotInstantiateError();
	expect(instance).toBeInstanceOf(DoNotInstantiateError);
});

test('Throw an instance', () => {
	const instance = new DoNotInstantiateError();
	expect(() => {
		throw instance;
	}).toThrowError(DoNotInstantiateError);
});
