import { expect, test } from 'vitest';
import DataBase from './database';

test('Create an instance', () => {
	const instance = new DataBase();
	expect(instance).toBeInstanceOf(DataBase);
});
