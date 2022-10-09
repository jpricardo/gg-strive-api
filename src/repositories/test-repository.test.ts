import { expect, test } from 'vitest';
import TestRepository from './test-repository';

test('Create an instance', async () => {
	const instance = await TestRepository.create();

	expect(instance).toBeInstanceOf(TestRepository);
});

test('Get URI', async () => {
	const instance = await TestRepository.create();

	expect(() => instance.getUri()).not.toThrowError();
});

test('Stop server', async () => {
	const instance = await TestRepository.create();

	expect(instance.stop()).resolves.not.toThrowError();
});
