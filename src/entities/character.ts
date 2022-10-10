import DoNotInstantiateError from '../errors/do-not-instantiate-error.js';
import InvalidPropertyError from '../errors/invalid-property-error.js';

export enum BattleType {
	'Balance' = 'Balance',
	'Long Range' = 'Long Range',
	'High Speed' = 'High Speed',
	'Power Throw' = 'Power Throw',
	'Unique' = 'Unique',
	'Technical' = 'Technical',
	'Shooting' = 'Shooting',
	'One Shot' = 'One Shot',
	'Rush' = 'Rush',
	'Power' = 'Power',
}

export enum MoveCategory {
	'Normal' = 'Normal',
	'Command Normal' = 'Command Normal',
	'Special' = 'Special',
	'Super' = 'Super',
}

interface IPortrait {
	name: string;
	img: string;
}

export interface IFrameData {
	onHit: string;
	onCounterHit: string;
	onBlock: string;
}

export interface IMove {
	category: keyof typeof MoveCategory;
	moveType: string;
	guard: string;
	input: string;
	name: string;
	frameData: IFrameData;
}

export interface ICharacterProps {
	name: string;
	displayName: string;
	battleType: BattleType;
	easyToUse: number;
	moves: Array<IMove>;
	portrait?: IPortrait;
}

export default class Character {
	private static MaxEasyToUse = 5;
	private static MinEasyToUse = 1;

	private props: ICharacterProps;

	get name() {
		return this.props.name;
	}

	get displayName() {
		return this.props.displayName;
	}

	constructor(props: ICharacterProps) {
		this.validateProps(props);
		this.props = props;
	}

	private validateProps(props: ICharacterProps) {
		if (props.easyToUse > Character.MaxEasyToUse || props.easyToUse < Character.MinEasyToUse) {
			throw new InvalidPropertyError('easyToUse');
		}
		if (!(props.battleType in BattleType)) {
			throw new InvalidPropertyError('battleType');
		}
	}

	toJson() {
		return this.props;
	}

	save() {
		console.error('Not implemented!');
	}
}
