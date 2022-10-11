import { IDatabaseConnector } from '../../db/database-connector.js';
import Character, { BattleType, ICharacterProps } from '../../entities/character.js';
import { ICharactersRepository } from '../characters-repository.js';

export interface ICharacterDatabaseProps {
	name: string;
	display_name: string;
	easy_to_use: number;
	battle_type: BattleType;
}

export default class MariaCharactersRepository implements ICharactersRepository {
	async getAll(): Promise<Character[]> {
		const queryString = 'SELECT T0.name, T0.display_name, T0.easy_to_use, T0.battle_type FROM striveapi.characters T0';
		const response: ICharacterDatabaseProps[] = await this.databaseConnector.query(queryString);
		const characters = response.map(
			(props) => new Character({ name: props.name, displayName: props.display_name, easyToUse: props.easy_to_use, battleType: props.battle_type, moves: [] })
		);
		return characters;
	}

	async save(character: Character) {
		const { name, displayName, easyToUse, battleType } = character;
		const queryString = 'INSERT INTO striveapi.characters (name, display_name, easy_to_use, battle_type) VALUES (?,?,?,?)';
		await this.databaseConnector.query(queryString, [name, displayName, easyToUse, battleType]);
		console.log(`Character ${character.name} created!`);
	}

	async getByName(characterName: string) {
		const queryString = 'SELECT T0.name, T0.display_name, T0.easy_to_use, T0.battle_type FROM striveapi.characters T0 WHERE T0.name=?';
		const response: ICharacterDatabaseProps[] = await this.databaseConnector.query(queryString, [characterName]);

		if (response.length > 1) throw new Error('wtf');
		if (response.length === 0) return undefined;

		const { name, display_name: displayName, easy_to_use: easyToUse, battle_type: battleType } = response[0];
		const props = { name, displayName, easyToUse, battleType, moves: [] };
		const character = new Character(props);
		return character;
	}

	async updateByName(name: string, payload: ICharacterProps) {
		const queryString = 'UPDATE striveapi.characters SET name=?, display_name=?, easy_to_use=?, battle_type=? WHERE name=?';
		await this.databaseConnector.query(queryString, [name, payload.displayName, payload.easyToUse, payload.battleType, name]);
		console.log(`Character ${name} updated! `);
	}

	async deleteByName(name: string) {}

	constructor(private databaseConnector: IDatabaseConnector) {}
}
