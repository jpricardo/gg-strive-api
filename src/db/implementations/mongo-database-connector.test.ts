import { afterEach, beforeEach, describe, expect, it, test } from 'vitest';
import AlreadyConnectedError from '../../errors/already-connected-error';
import AlreadyDisconnectedError from '../../errors/already-disconnected-error';
import InvalidUriError from '../../errors/invalid-uri-error';
import InMemoryRepository from '../../repositories/in-memory';
import TestRepository from '../../repositories/test-repository';
import MongoDatabaseConnector from './mongo-database-connector';

// Invalid
const invalidUri = 'www.localhost.com';
const emptyString = '';

interface LocalTestContext {
	database: InMemoryRepository;
}

// Setup and cleanup
beforeEach<LocalTestContext>(async (context) => {
	context.database = await TestRepository.create();
});

afterEach<LocalTestContext>(async ({ database }) => {
	await database.stop({ doCleanup: true });
});

describe('Valid URI', () => {
	// Tests
	it<LocalTestContext>('Creates an instance', ({ database }) => {
		const instance = new MongoDatabaseConnector(database.getUri());
		expect(instance).toBeInstanceOf(MongoDatabaseConnector);
	});

	it<LocalTestContext>('Connects and disconnects', async ({ database }) => {
		const instance = new MongoDatabaseConnector(database.getUri());
		await expect(instance.connect()).resolves.not.toThrowError();
		await expect(instance.disconnect()).resolves.not.toThrowError();
	});

	it<LocalTestContext>('Connects once and disconnects twice', async ({ database }) => {
		const instance = new MongoDatabaseConnector(database.getUri());
		await expect(instance.connect()).resolves.not.toThrowError();
		await expect(instance.disconnect()).resolves.not.toThrowError();
		await expect(instance.disconnect()).rejects.toThrowError(AlreadyDisconnectedError);
	});

	it<LocalTestContext>('Connects twice before disconnecting', async ({ database }) => {
		const instance = new MongoDatabaseConnector(database.getUri());
		await expect(instance.connect()).resolves.not.toThrowError();
		await expect(instance.connect()).rejects.toThrowError(AlreadyConnectedError);
		await expect(instance.disconnect()).resolves.not.toThrowError();
	});

	it<LocalTestContext>('Connects, disconnects and connects again', async ({ database }) => {
		const instance = new MongoDatabaseConnector(database.getUri());
		await expect(instance.connect()).resolves.not.toThrowError();
		await expect(instance.disconnect()).resolves.not.toThrowError();
		await expect(instance.connect()).resolves.not.toThrowError();
	});

	it<LocalTestContext>('Disconnects without connecting', async ({ database }) => {
		const instance = new MongoDatabaseConnector(database.getUri());
		await expect(instance.disconnect()).rejects.toThrowError(AlreadyDisconnectedError);
	});
});

describe('Invalid URI', () => {
	it<LocalTestContext>('Creates an instance with invalid URI', ({ database }) => {
		expect(() => new MongoDatabaseConnector(invalidUri)).toThrowError(InvalidUriError);
	});

	test<LocalTestContext>('Creates an instance with empty URI', ({ database }) => {
		expect(() => new MongoDatabaseConnector(emptyString)).toThrowError(InvalidUriError);
	});
});
