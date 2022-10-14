import { encodeBase64 } from 'bcryptjs';
import { describe, expect, it } from 'vitest';
import InvalidPropertyError from '../../errors/invalid-property-error';
import Portrait from './portrait';
import { IPortraitProps } from './portrait';

const validCharacter = 'test_character';
const validName = 'test_character_portrait.png';
const encoder = new TextEncoder();
const byteArray = encoder.encode('valid image test content');
const validContent = encodeBase64(byteArray, 16);

const invalidName = 3;
const invalidContent = byteArray;
const invalidCharacter = 123;

const validProps: IPortraitProps = {
	character: validCharacter,
	name: validName,
	content: validContent,
};

describe('Create instance with valid props', () => {
	it('should create new instance with new keyword', () => {
		const props = { ...validProps };

		const instance = new Portrait(props);
		expect(instance).toBeInstanceOf(Portrait);
		expect(instance.name).toEqual(validName);
		expect(instance.content).toEqual(validContent);
	});

	it('should return json', () => {
		const props = { ...validProps };

		const instance = new Portrait(props);

		expect(instance.toJson()).toEqual(props);
	});
});

describe('Create instance with invalid props', () => {
	it('should throw with invalid character', () => {
		const props = { ...validProps, character: invalidCharacter };

		// @ts-ignore
		expect(() => new Portrait(props)).toThrowError(InvalidPropertyError);
	});

	it('should throw with invalid name', () => {
		const props = { ...validProps, name: invalidName };

		// @ts-ignore
		expect(() => new Portrait(props)).toThrowError(InvalidPropertyError);
	});

	it('should throw with invalid content', () => {
		const props = { ...validProps, content: invalidContent };

		// @ts-ignore
		expect(() => new Portrait(props)).toThrowError(InvalidPropertyError);
	});
});
