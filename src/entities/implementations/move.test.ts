import { describe, expect, it } from 'vitest';
import InvalidPropertyError from '../../errors/invalid-property-error';
import Move, { Guard, IMoveProps, MoveCategory, MoveType } from './move';

const characterName = 'teste';
const correctName = 'Potemkin Buster';
const correctInput = '632146P';
const correctCategory = MoveCategory.Special;
const correctMoveType = MoveType.Throw;
const correctGuard = Guard.Unblockable;

const invalidGuard = 'Whatever';
const invalidType = 'Win Button';
const invalidCategory = 'Instakill';

const validProps: IMoveProps = {
	character: characterName,
	name: correctName,
	input: correctInput,
	category: correctCategory,
	moveType: correctMoveType,
	guard: correctGuard,
};

describe('Create instance with valid props', () => {
	it('should work with new keyword', () => {
		const props = { ...validProps };

		const instance = new Move(props);
		expect(instance).toBeInstanceOf(Move);
		expect(instance.name).toEqual(correctName);
	});

	it('should return its props with .getJson()', () => {
		const props = { ...validProps };

		const instance = new Move(props);

		expect(instance.toJson()).toEqual(props);
	});
});

describe('Create instance with invalid props', () => {
	it('should throw with invalid Category', () => {
		const props = { ...validProps, category: invalidCategory };

		// @ts-ignore
		expect(() => new Move(props)).toThrowError(InvalidPropertyError);
	});

	it('should throw with invalid Guard', () => {
		const props = { ...validProps, guard: invalidGuard };

		// @ts-ignore
		expect(() => new Move(props)).toThrowError(InvalidPropertyError);
	});

	it('should throw with invalid Type', () => {
		const props = { ...validProps, moveType: invalidType };

		// @ts-ignore
		expect(() => new Move(props)).toThrowError(InvalidPropertyError);
	});
});
