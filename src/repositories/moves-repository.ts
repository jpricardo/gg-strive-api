import Move, { IMoveProps } from '../entities/implementations/move';

export interface IMovesRepository {
	save: (move: Move) => Promise<void>;
	getAll: () => Promise<Move[]>;
	getAllByCharacterName: (characterName: string) => Promise<Move[]>;
	getById: (id: string) => Promise<Move | undefined>;
	updateById: (id: string, payload: IMoveProps) => Promise<void>;
	deleteById: (id: string) => Promise<void>;
}
