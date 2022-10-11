import { describe, expect, it } from 'vitest';
import DoNotInstantiateError from '../errors/do-not-instantiate-error';
import InvalidPropertyError from '../errors/invalid-property-error';
import Character, { BattleType, ICharacterProps } from './character';
import Move from './move';

const correctName = 'john';
const correctDisplayName = 'John Doe';
const correctBattleType = BattleType.Balance;
const correctEasyToUse = 5;
const emptyMoves: Array<Move> = [];

const invalidEasyToUse = 10;
const invalidBattleType = 'Broken';

const validProps = {
	name: correctName,
	displayName: correctDisplayName,
	battleType: correctBattleType,
	easyToUse: correctEasyToUse,
	moves: emptyMoves,
};

describe('Valid props', () => {
	it('Creates instance with new keyword', () => {
		const props = { ...validProps };

		const instance = new Character(props);
		expect(instance).toBeInstanceOf(Character);
		expect(instance.displayName).toEqual(correctDisplayName);
		expect(instance.name).toEqual(correctName);
	});

	it('Gets JSON', () => {
		const props = { ...validProps };

		const instance = new Character(props);

		expect(instance.toJson()).toEqual(props);
	});
});

describe('Invalid props', () => {
	it('Creates Character with invalid easyToUse', () => {
		const props = { ...validProps, easyToUse: invalidEasyToUse };

		expect(() => new Character(props)).toThrowError(InvalidPropertyError);
	});

	it('Creates Character with invalid battleType', () => {
		const props = { ...validProps, battleType: invalidBattleType };

		// @ts-ignore
		expect(() => new Character(props)).toThrowError(InvalidPropertyError);
	});

	it.todo('Creates Character with invalid moves');
});
