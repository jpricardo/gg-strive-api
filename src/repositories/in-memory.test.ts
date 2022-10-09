import { describe, expect, it } from 'vitest';

import NotImplementedError from '../errors/not-implemented-error';
import InMemoryRepository from './in-memory';

describe('Create an instance', () => {
	it('Should throw', () => {
		expect(async () => await InMemoryRepository.create()).rejects.toThrowError(NotImplementedError);
	});
});
