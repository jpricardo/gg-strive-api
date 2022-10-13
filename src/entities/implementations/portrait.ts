import { randomUUID } from 'crypto';
import IDatabaseModel, { IDatabaseModelProps } from '../database-model';

export interface IPortraitProps extends IDatabaseModelProps {
	name: string;
	content: string;
}

export default class Portrait implements IDatabaseModel {
	constructor(private props: IPortraitProps) {
		this.validateProps();
	}

	private validateProps(): void {
		if (!this.props.id) this.props.id = randomUUID();
	}

	public toJson() {
		return this.props;
	}
}
