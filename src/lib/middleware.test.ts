import express from 'express';
import { expect, test } from 'vitest';

import DoNotInstantiateError from '../errors/do-not-instantiate-error';
import Middleware from './middleware';

test('Instantiate Middleware', () => {
	expect(() => {
		new Middleware();
	}).toThrowError(DoNotInstantiateError);
});

test('Register on valid application', () => {
	const app = express();

	expect(() => {
		Middleware.registerMiddleware(app);
	}).not.toThrowError();
});

test('Register on invalid application', () => {
	const app = { name: 'application', port: 8001, middleware: [] };

	expect(() => {
		// @ts-ignore
		Middleware.registerMiddleware(app);
	}).toThrowError(TypeError);
});
