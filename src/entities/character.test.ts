import { describe, expect, it } from 'vitest';
import DoNotInstantiateError from '../errors/do-not-instantiate-error';
import InvalidPropertyError from '../errors/invalid-property-error';
import Character from './character';
import { BattleType, CharacterProps } from './interfaces/character-props.js';

const correctName = 'john';
const correctDisplayName = 'John Doe';
const correctBattleType = BattleType.Balance;
const correctEasyToUse = 5;
const emptyMoves: CharacterProps['moves'] = [];

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
	it('Creates instance with .create(props)', () => {
		const props = { ...validProps };

		const instance = Character.create(props);

		expect(instance).toBeInstanceOf(Character);
		expect(instance.name).toEqual(correctName);
		expect(instance.displayName).toEqual(correctDisplayName);
	});

	it('Creates instance with new keyword', () => {
		const props = { ...validProps };

		// @ts-ignore
		expect(() => new Character(props)).toThrowError(DoNotInstantiateError);
	});

	it('Gets JSON', () => {
		const props = { ...validProps };

		const instance = Character.create(props);

		expect(instance.toJson()).toEqual(props);
	});

	it('Saves', () => {
		const props = { ...validProps };

		const instance = Character.create(props);

		expect(() => instance.save()).not.toThrowError();
	});

	it.todo('Updates');

	it.todo('Deletes');
});

describe('Invalid props', () => {
	it('Creates Character with invalid easyToUse', () => {
		const props = { ...validProps, easyToUse: invalidEasyToUse };

		expect(() => Character.create(props)).toThrowError(InvalidPropertyError);
	});

	it('Creates Character with invalid battleType', () => {
		const props = { ...validProps, battleType: invalidBattleType };

		// @ts-ignore
		expect(() => Character.create(props)).toThrowError(InvalidPropertyError);
	});

	it.todo('Creates Character with invalid moves');
});
