import { expect, test } from 'vitest';
import Config from './config';

test('Port must be defined', () => {
	expect(Config.port).toBeDefined();
});

test('JWT Joken must be defined', () => {
	expect(Config.jwtSecret).toBeDefined();
});
