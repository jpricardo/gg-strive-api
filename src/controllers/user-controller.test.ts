import { describe, expect, it } from 'vitest';
import DoNotInstantiateError from '../errors/do-not-instantiate-error';
import UserController from './user-controller';

describe('Instance', () => {
	it('Creates an instance', () => {
		expect(() => new UserController()).toThrowError(DoNotInstantiateError);
	});
});

describe('Handlers', () => {
	it('Asserts create is defined', () => {
		expect(UserController.create).toBeDefined();
	});
});
