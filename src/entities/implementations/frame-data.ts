import { randomUUID } from 'crypto';
import IDatabaseModel, { IDatabaseModelProps } from '../database-model';

export interface IFrameDataProps extends IDatabaseModelProps {
	move: string;
	onHit: number;
	onCounterHit: number;
	onBlock: number;
}

export default class FrameData implements IDatabaseModel {
	get onHit() {
		return this.props.onHit;
	}
	get onCounterHit() {
		return this.props.onHit;
	}
	get onBlock() {
		return this.props.onHit;
	}

	constructor(private props: IFrameDataProps) {
		this.validateProps();
	}

	private validateProps() {
		if (!this.props.id) this.props.id = randomUUID();
	}

	public toJson() {
		return this.props;
	}
}
