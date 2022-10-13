import { randomUUID } from 'crypto';
import InvalidPropertyError from '../../errors/invalid-property-error';
import IDatabaseModel, { IDatabaseModelProps } from '../database-model';
import FrameData from './frame-data';

export enum Guard {
	'All',
	'Standing',
	'Crouching',
	'Unblockable',
}

export enum MoveCategory {
	'Passive',
	'Normal',
	'Command Normal',
	'Special',
	'Super',
}

export enum MoveType {
	'Strike',
	'Throw',
	'Projectile',
	'Air Throw',
	'Buff',
	'Debuff',
	'Movement',
}

export interface IMoveProps extends IDatabaseModelProps {
	character: string;
	category: MoveCategory;
	moveType: MoveType;
	input: string;
	name: string;
	guard?: Guard;
	frameData?: FrameData;
}

export default class Move implements IDatabaseModel {
	get category() {
		return this.props.category;
	}
	get moveType() {
		return this.props.moveType;
	}
	get guard() {
		return this.props.guard;
	}
	get input() {
		return this.props.input;
	}
	get name() {
		return this.props.name;
	}
	get frameData() {
		return this.props.frameData;
	}

	constructor(private props: IMoveProps) {
		this.validateProps();
	}

	private validateProps() {
		if (!this.props.id) this.props.id = randomUUID();
		if (!(this.props.moveType in MoveType)) throw new InvalidPropertyError('moveType');
		if (!(this.props.category in MoveCategory)) throw new InvalidPropertyError('category');
		if (this.props.guard && !(this.props.guard in Guard)) throw new InvalidPropertyError('guard');
		if (this.props.frameData && !(this.props.frameData instanceof FrameData)) throw new InvalidPropertyError('frameData');
	}

	public toJson() {
		const frameData = this.props.frameData ? this.props.frameData.toJson() : undefined;
		return { ...this.props, frameData };
	}
}
