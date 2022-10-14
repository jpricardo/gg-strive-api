import { describe, expect, it } from 'vitest';
import InvalidPropertyError from '../../errors/invalid-property-error';
import Character, { BattleType, ICharacterProps } from './character';
import Move from './move';

const correctName = 'john';
const correctDisplayName = 'John Doe';
const correctBattleType = BattleType.Balance;
const correctEasyToUse = 5;
const emptyMoves: Array<Move> = [];

const invalidEasyToUse = 10;
const invalidBattleType = 'Broken';

const validProps: ICharacterProps = {
	name: correctName,
	displayName: correctDisplayName,
	battleType: correctBattleType,
	easyToUse: correctEasyToUse,
	moves: emptyMoves,
};

describe('Create instance with valid props', () => {
	it('should create new instance with new keyword', () => {
		const props = { ...validProps };

		const instance = new Character(props);
		expect(instance).toBeInstanceOf(Character);
		expect(instance.displayName).toEqual(correctDisplayName);
		expect(instance.name).toEqual(correctName);
	});

	it('should return json', () => {
		const props = { ...validProps };

		const instance = new Character(props);

		expect(instance.toJson()).toEqual(props);
	});
});

describe('Create instance with invalid props', () => {
	it('should throw with invalid easyToUse', () => {
		const props = { ...validProps, easyToUse: invalidEasyToUse };

		expect(() => new Character(props)).toThrowError(InvalidPropertyError);
	});

	it('should throw with invalid battleType', () => {
		const props = { ...validProps, battleType: invalidBattleType };

		// @ts-ignore
		expect(() => new Character(props)).toThrowError(InvalidPropertyError);
	});

	it.todo('should throw with invalid moves');
});
