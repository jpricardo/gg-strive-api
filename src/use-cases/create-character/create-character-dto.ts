import { BattleType, IMove } from '../../entities/character';

export interface ICreateCharacterDTO {
	name: string;
	displayName: string;
	easyToUse: number;
	battleType: BattleType;
	moves: Array<IMove>;
}
