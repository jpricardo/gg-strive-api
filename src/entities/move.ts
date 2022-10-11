import { randomUUID } from 'crypto';
import FrameData from './frame-data';

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

export interface IMoveProps {
	id?: string;
	character: string;
	category: MoveCategory;
	moveType: string;
	guard: string;
	input: string;
	name: string;
	frameData: FrameData;
}

export default class Move {
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
		if (!this.props.id) this.props.id = randomUUID();
		this.validateProps();
	}

	private validateProps() {}

	public toJson() {
		return { ...this.props, frameData: this.props.frameData.toJson() };
	}
}
