import InvalidPropertyError from '../errors/invalid-property-error.js';
import Move from './move.js';

export enum BattleType {
	'Balance',
	'Long Range',
	'High Speed',
	'Power Throw',
	'Unique',
	'Technical',
	'Shooting',
	'One Shot',
	'Rush',
	'Power',
}

interface IPortrait {
	name: string;
	img: string;
}

export interface ICharacterProps {
	name: string;
	displayName: string;
	battleType: BattleType;
	easyToUse: number;
	moves: Array<Move>;
	portrait?: IPortrait;
}

export default class Character {
	private static MaxEasyToUse = 5;
	private static MinEasyToUse = 1;

	get name() {
		return this.props.name;
	}

	get displayName() {
		return this.props.displayName;
	}

	get easyToUse() {
		return this.props.easyToUse;
	}

	get battleType() {
		return this.props.battleType;
	}

	constructor(private props: ICharacterProps) {
		this.validateProps();
	}

	private validateProps() {
		if (this.props.easyToUse > Character.MaxEasyToUse || this.props.easyToUse < Character.MinEasyToUse) {
			throw new InvalidPropertyError('easyToUse');
		}
		if (!(this.props.battleType in BattleType)) {
			throw new InvalidPropertyError('battleType');
		}
	}

	public toJson() {
		return { ...this.props, moves: this.props.moves.map((move) => move.toJson()) };
	}
}
