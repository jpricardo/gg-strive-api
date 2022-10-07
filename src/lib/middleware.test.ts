import { expect, test } from 'vitest';
import DoNotInstantiateError from './errors/do-not-instantiate-error';

import Middleware from './middleware';

test('Instantiate Middleware', () => {
	expect(() => {
		new Middleware();
	}).toThrowError(DoNotInstantiateError);
});

test('Register on an invalid Object', () => {
	const app = { name: 'application', port: 8001, middleware: [] };

	expect(() => {
		// @ts-ignore
		Middleware.registerMiddleware(app);
	}).toThrowError(TypeError);
});
