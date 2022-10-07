import { expect, test } from 'vitest';
import DatabaseConnector from './database-connector';
import InvalidUriError from './errors/invalid-uri-string';

import { MongoMemoryServer } from 'mongodb-memory-server';
import { afterAll, beforeAll } from 'vitest';
import AlreadyConnectedError from './errors/already-connected-error';
import AlreadyDisconnectedError from './errors/already-disconnected-error';

let database = await MongoMemoryServer.create();

// Valid
let validUri: string;

// Invalid
const invalidUri = 'www.localhost.com';
const emptyString = '';

// Setup and cleanup
beforeAll(async () => {
	await setupDatabaseUri();
});

afterAll(async () => {
	await database.stop({ doCleanup: true });
});

const setupDatabaseUri = async () => {
	return new Promise<void>((resolve, reject) => {
		try {
			const uri = database.getUri();
			validUri = uri;
			resolve();
		} catch (err) {
			reject(err);
		}
	});
};

// Tests
test('Create an instance with valid URI', () => {
	const instance = new DatabaseConnector(validUri);
	expect(instance).toBeInstanceOf(DatabaseConnector);
});

test('Create an instance with invalid URI', () => {
	expect(() => {
		new DatabaseConnector(invalidUri);
	}).toThrowError(InvalidUriError);
});

test('Create an instance with empty URI', () => {
	expect(() => {
		new DatabaseConnector(emptyString);
	}).toThrowError(InvalidUriError);
});

test('Connect and disconnect', async () => {
	const instance = new DatabaseConnector(validUri);
	await expect(instance.connect()).resolves.not.toThrowError();
	await expect(instance.disconnect()).resolves.not.toThrowError();
});

test('Connect once and disconnect twice', async () => {
	const instance = new DatabaseConnector(validUri);
	await expect(instance.connect()).resolves.not.toThrowError();
	await expect(instance.disconnect()).resolves.not.toThrowError();
	await expect(instance.disconnect()).rejects.toThrowError(AlreadyDisconnectedError);
});

test('Connect twice before disconnecting', async () => {
	const instance = new DatabaseConnector(validUri);
	await expect(instance.connect()).resolves.not.toThrowError();
	await expect(instance.connect()).rejects.toThrowError(AlreadyConnectedError);
	await expect(instance.disconnect()).resolves.not.toThrowError();
});

test('Connect, disconnect and connect again', async () => {
	const instance = new DatabaseConnector(validUri);
	await expect(instance.connect()).resolves.not.toThrowError();
	await expect(instance.disconnect()).resolves.not.toThrowError();
	await expect(instance.connect()).resolves.not.toThrowError();
});

test('Disconnect without connecting', async () => {
	const instance = new DatabaseConnector(validUri);
	await expect(instance.disconnect()).rejects.toThrowError(AlreadyDisconnectedError);
});
