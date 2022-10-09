import { describe, it, expect } from 'vitest';
import Server from './server';

const testPort = 1234;

describe('Valid server', () => {
	it('Should run on the specified port', () => {
		expect(() => {
			const instance = new Server({ port: testPort });
			instance.run();
			instance.stop();
		}).not.toThrowError();
	});

	it.todo('Should throw when multiple instances are on same port');
});
