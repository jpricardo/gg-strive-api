import { BattleType } from '../../entities/implementations/character';
import Move from '../../entities/implementations/move';

export interface ICreateCharacterDTO {
	name: string;
	displayName: string;
	easyToUse: number;
	battleType: BattleType;
	moves: Array<Move>;
}
