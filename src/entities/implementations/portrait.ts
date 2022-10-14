import { randomUUID } from 'crypto';
import InvalidPropertyError from '../../errors/invalid-property-error';
import IDatabaseModel, { IDatabaseModelProps } from '../database-model';

export interface IPortraitProps extends IDatabaseModelProps {
	character: string;
	name: string;
	content: string;
}

export default class Portrait implements IDatabaseModel {
	get id() {
		return this.props.id;
	}

	get name() {
		return this.props.name;
	}

	get content() {
		return this.props.content;
	}

	constructor(private props: IPortraitProps) {
		this.validateProps();
	}

	private validateProps(): void {
		if (!this.props.id) this.props.id = randomUUID();
		if (!(typeof this.props.character === 'string')) throw new InvalidPropertyError('character');
		if (!(typeof this.props.name === 'string')) throw new InvalidPropertyError('name');
		if (!(typeof this.props.content === 'string')) throw new InvalidPropertyError('content');
	}

	public toJson() {
		return this.props;
	}
}
