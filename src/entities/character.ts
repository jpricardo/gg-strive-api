import DoNotInstantiateError from '../errors/do-not-instantiate-error';
import InvalidPropertyError from '../errors/invalid-property-error';
import { BattleType, CharacterProps } from './interfaces/character-props';

class Character {
	private static MaxEasyToUse = 5;
	private static MinEasyToUse = 1;

	private static initializing = false;

	private props: CharacterProps;

	static create(props: CharacterProps) {
		Character.initializing = true;
		return new Character(props);
	}

	get name() {
		return this.props.name;
	}

	get displayName() {
		return this.props.displayName;
	}

	private constructor(props: CharacterProps) {
		if (!Character.initializing) throw new DoNotInstantiateError();

		Character.initializing = false;
		this.validateProps(props);
		this.props = props;
	}

	private validateProps(props: CharacterProps) {
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
export default Character;
