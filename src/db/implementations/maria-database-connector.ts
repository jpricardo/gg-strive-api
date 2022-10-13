import mariadb from 'mariadb';
import { IDatabaseConnector } from '../database-connector';

export interface IDatabaseOptions {
	user: string;
	password: string;
	host?: string;
	port?: number;
	connectionLimit?: number;
	rowsAsArray?: boolean;
}

export default class MariaDatabaseConnector implements IDatabaseConnector {
	private readonly pool: mariadb.Pool;

	constructor(options: IDatabaseOptions) {
		this.pool = mariadb.createPool({
			...options,
			host: options.host || 'localhost',
			port: options.port || 3306,
			connectionLimit: options.connectionLimit || 5,
			rowsAsArray: !!options.rowsAsArray,
		});
		console.log('[MARIADB] Pool created');
	}

	async connect() {}

	async query(queryString: string, variables?: Array<string | number>) {
		let result;
		const connection = await this.getConnection();
		try {
			result = await connection.query(queryString, variables);
		} catch (err) {
			console.error(err);
		} finally {
			await this.endConnection(connection);
			return result;
		}
	}

	async getConnection() {
		console.log('[MARIADB] Establishing connection...');
		return this.pool.getConnection();
	}

	async endConnection(connection: mariadb.PoolConnection) {
		console.log('[MARIADB] Ending connection...');
		return connection.end();
	}
}
