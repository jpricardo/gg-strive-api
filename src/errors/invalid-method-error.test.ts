import { expect, it, test, describe } from 'vitest';
import InvalidMethodError from './invalid-method-error';

const invalidMethod = 'INVALID_METHOD';

describe('No argument', () => {
	it('Should create an instance', () => {
		const instance = new InvalidMethodError();
		expect(instance).toBeInstanceOf(InvalidMethodError);
	});

	it('Should throw an instance', () => {
		const instance = new InvalidMethodError();
		expect(() => {
			throw instance;
		}).toThrowError(InvalidMethodError);
	});
});

describe('With string argument', () => {
	it('Should create an instance', () => {
		const instance = new InvalidMethodError(invalidMethod);
		expect(instance).toBeInstanceOf(InvalidMethodError);
	});

	it('Should throw an instance', () => {
		const instance = new InvalidMethodError(invalidMethod);
		expect(() => {
			throw instance;
		}).toThrowError(InvalidMethodError);
	});
});
