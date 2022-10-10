import { describe, expect, it } from 'vitest';
import DoNotInstantiateError from '../errors/do-not-instantiate-error';

import NotImplementedError from '../errors/not-implemented-error';
import InMemoryRepository from './in-memory';

describe('Create an instance', () => {
	it('Should throw when using new', () => {
		// @ts-ignore
		expect(() => new InMemoryRepository()).toThrowError(DoNotInstantiateError);
	});

	it('Should throw when using .create()', () => {
		expect(async () => await InMemoryRepository.create()).rejects.toThrowError(NotImplementedError);
	});
});
