import { describe, expect, it } from 'vitest';
import InvalidPropertyError from '../../errors/invalid-property-error';
import FrameData, { IFrameDataProps } from './frame-data';

const testMoveId = 'test_move';
const validOnCounterHit = +15;
const validOnHit = +5;
const validOnBlock = -3;

const invalidOnBlock = '';
const invalidOnHit = '';
const invalidOnCounterHit = '';

const validProps: IFrameDataProps = {
	move: testMoveId,
	onCounterHit: validOnCounterHit,
	onHit: validOnHit,
	onBlock: validOnBlock,
};

describe('Create instance with valid props', () => {
	it('should create new instance with new keyword', () => {
		const props = { ...validProps };

		const instance = new FrameData(props);
		expect(instance).toBeInstanceOf(FrameData);
		expect(instance.onBlock).toEqual(validOnBlock);
		expect(instance.onHit).toEqual(validOnHit);
	});

	it('should return json', () => {
		const props = { ...validProps };

		const instance = new FrameData(props);

		expect(instance.toJson()).toEqual(props);
	});
});

describe('Create instance with invalid props', () => {
	it('should throw with invalid onBlock', () => {
		const props = { ...validProps, onBlock: invalidOnBlock };

		// @ts-ignore
		expect(() => new FrameData(props)).toThrowError(InvalidPropertyError);
	});

	it('should throw with invalid onHit', () => {
		const props = { ...validProps, onHit: invalidOnHit };

		// @ts-ignore
		expect(() => new FrameData(props)).toThrowError(InvalidPropertyError);
	});

	it('should throw with invalid onCounterHit', () => {
		const props = { ...validProps, onCounterHit: invalidOnCounterHit };

		// @ts-ignore
		expect(() => new FrameData(props)).toThrowError(InvalidPropertyError);
	});
});
