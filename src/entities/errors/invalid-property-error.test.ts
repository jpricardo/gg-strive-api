import { expect, test } from 'vitest';
import InvalidPropertyError from './invalid-property-error';

// Valid
const stringProperty = 'test';
const arrayOfStrings = ['test1', 'test2', 'test3', 'test4', 'test5'];

// Invalid
const emptyString = '';
const emptyArray: string[] = [];

test('Create an instance with string as argument', () => {
	const instance = new InvalidPropertyError(stringProperty);
	expect(instance).toBeInstanceOf(InvalidPropertyError);
	const firstProperty = instance.getProperties()[0];
	expect(firstProperty).toStrictEqual(stringProperty);
});

test('Create an instance with array of strings as argument', () => {
	const instance = new InvalidPropertyError(arrayOfStrings);
	const properties = instance.getProperties();
	expect(instance).toBeInstanceOf(InvalidPropertyError);
	expect(properties.length).toStrictEqual(arrayOfStrings.length);
});

test('Create an instance with empty string as argument', () => {
	expect(() => {
		new InvalidPropertyError(emptyString);
	}).toThrowError();
});

test('Create an instance with empty array as argument', () => {
	expect(() => {
		new InvalidPropertyError(emptyArray);
	}).toThrowError();
});

test('Throw an instance', () => {
	const instance = new InvalidPropertyError(stringProperty);
	expect(() => {
		throw instance;
	}).toThrowError(InvalidPropertyError);
});
