import { randomUUID } from 'crypto';

export interface IFrameDataProps {
	id?: string;
	move: string;
	onHit: number;
	onCounterHit: number;
	onBlock: number;
}

export default class FrameData {
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
		if (!this.props.id) this.props.id = randomUUID();
	}

	public toJson() {
		return this.props;
	}
}
