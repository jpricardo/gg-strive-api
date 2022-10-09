import { describe, expect, it } from 'vitest';
import DoNotInstantiateError from '../errors/do-not-instantiate-error';
import CharacterController from './character-controller';

describe('Create an Instance', () => {
	it('Should throw', () => {
		expect(() => new CharacterController()).toThrowError(DoNotInstantiateError);
	});
});

describe('Create', () => {
	it('Asserts create is defined', () => {
		expect(CharacterController.create).toBeDefined();
	});

	it.todo("Should create a Character and return it's name");
	it.todo('Should not create an invalid character');
	it.todo('Should return forbidden with no auth');
});

describe('Get All', () => {
	it('Asserts getAll is defined', () => {
		expect(CharacterController.getAll).toBeDefined();
	});

	it.todo('Should get a list of Characters');
});

describe('Get by Name', () => {
	it('Asserts getByName is defined', () => {
		expect(CharacterController.getByName).toBeDefined();
	});

	it.todo('Should get a Character');
	it.todo('Should return 404 with no match');
});

describe('Update by Name', () => {
	it('Asserts updateByName is defined', () => {
		expect(CharacterController.updateByName).toBeDefined();
	});

	it.todo('Should update a Character');
	it.todo('Should not make an invalid character');
	it.todo('Should return forbidden with no auth');
	it.todo('Should return 404 with no match');
});

describe('Delete by Name', () => {
	it('Asserts deleteByName is defined', () => {
		expect(CharacterController.deleteByName).toBeDefined();
	});

	it.todo('Should delete a Character');
	it.todo('Should return forbidden with no auth');
	it.todo('Should return 404 with no match');
});
