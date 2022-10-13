import { IDatabaseConnector } from '../../db/database-connector';
import Move, { MoveCategory, MoveType, Guard } from '../../entities/implementations/move';
import { IMovesRepository } from '../moves-repository';

export interface IMovesDatabaseProps {
	id: string;
	character: string;
	name: string;
	input: string;
	category: MoveCategory;
	move_type: MoveType;
	guard?: Guard;
}

export default class MariaMovesRepository implements IMovesRepository {
	async save(move: Move): Promise<void> {}

	async getAll(): Promise<Move[]> {
		const queryString = 'SELECT * FROM striveapi.moves';
		const response: IMovesDatabaseProps[] = await this.databaseConnector.query(queryString);
		return response.map((props) => new Move({ ...props, moveType: props.move_type }));
	}

	async getAllByCharacterName(characterName: string): Promise<Move[]> {
		const queryString = 'SELECT * FROM striveapi.moves T0 WHERE T0.character = ?';
		const response: IMovesDatabaseProps[] = await this.databaseConnector.query(queryString, [characterName]);
		const moves = response.map((props) => new Move({ ...props, moveType: props.move_type }));
		return moves;
	}

	async getById(id: string): Promise<Move | undefined> {
		const queryString = 'SELECT * FROM striveapi.moves T0 WHERE T0.id = ?';
		const response: IMovesDatabaseProps[] = await this.databaseConnector.query(queryString, [id]);
		if (response.length > 1) throw new Error('wtf');
		if (response.length === 0) return undefined;

		const props = response[0];
		return new Move({ ...props, moveType: props.move_type });
	}

	async updateById(id: string) {}

	async deleteById(id: string) {}

	constructor(private databaseConnector: IDatabaseConnector) {}
}
