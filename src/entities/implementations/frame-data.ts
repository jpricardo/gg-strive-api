import { randomUUID } from 'crypto';
import InvalidPropertyError from '../../errors/invalid-property-error';
import IDatabaseModel, { IDatabaseModelProps } from '../database-model';

export interface IFrameDataProps extends IDatabaseModelProps {
	move: string;
	onHit: number;
	onCounterHit: number;
	onBlock: number;
}

export default class FrameData implements IDatabaseModel {
	get id() {
		return this.props.id;
	}

	get move() {
		return this.props.move;
	}

	get onHit() {
		return this.props.onHit;
	}
	get onCounterHit() {
		return this.props.onCounterHit;
	}
	get onBlock() {
		return this.props.onBlock;
	}

	constructor(private props: IFrameDataProps) {
		this.validateProps();
	}

	private validateProps() {
		if (!this.props.id) this.props.id = randomUUID();
		if (!(typeof this.props.onBlock === 'number')) throw new InvalidPropertyError('onBlock');
		if (!(typeof this.props.onHit === 'number')) throw new InvalidPropertyError('onHit');
		if (!(typeof this.props.onCounterHit === 'number')) throw new InvalidPropertyError('onCounterHit');
	}

	public toJson() {
		return this.props;
	}
}
