import { expect, test } from 'vitest';
import Character from './character';
import InvalidPropertyError from './errors/invalid-property-error';
import { BattleType, CharacterProps } from './interfaces/character-props.js';

const correctName = 'john';
const correctDisplayName = 'John Doe';
const correctBattleType = BattleType.Balance;
const correctEasyToUse = 5;
const emptyMoves: CharacterProps['moves'] = [];

const incorrectEasyToUse = 10;
const incorrectBattleType = 'Broken';

test('Create a character', () => {
	const props = {
		name: correctName,
		displayName: correctDisplayName,
		battleType: correctBattleType,
		easyToUse: correctEasyToUse,
		moves: emptyMoves,
	};

	const character = Character.create(props);

	expect(character).toBeInstanceOf(Character);
	expect(character.name).toEqual(correctName);
	expect(character.displayName).toEqual(correctDisplayName);
});

test('Create character with invalid easyToUse', () => {
	const props = {
		name: correctName,
		displayName: correctDisplayName,
		battleType: correctBattleType,
		easyToUse: incorrectEasyToUse,
		moves: emptyMoves,
	};

	expect(() => {
		// @ts-ignore
		Character.create(props);
	}).toThrowError(InvalidPropertyError);
});

test('Create character with invalid battleType', () => {
	const props = {
		name: correctName,
		displayName: correctDisplayName,
		battleType: incorrectBattleType,
		easyToUse: correctEasyToUse,
		moves: emptyMoves,
	};

	expect(() => {
		// @ts-ignore
		Character.create(props);
	}).toThrowError(InvalidPropertyError);
});