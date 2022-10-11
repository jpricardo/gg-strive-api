import { BattleType } from '../../entities/character';
import Move from '../../entities/move';

export interface ICreateCharacterDTO {
	name: string;
	displayName: string;
	easyToUse: number;
	battleType: BattleType;
	moves: Array<Move>;
}
