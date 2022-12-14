import DatabaseConnector from './database-connector.js';
import MissingCredentialsError from '../errors/missing-credentials-error.js';
import MongoDatabaseConnector from './mongo-database-connector.js';

import dotenv from 'dotenv';
dotenv.config();

export default class DataBase {
	private readonly username = process.env.DB_USERNAME;
	private readonly password = process.env.DB_PASSWORD;
	private readonly uri = `mongodb+srv://${this.username}:${this.password}@cluster0.leiy1eq.mongodb.net/?retryWrites=true&w=majority`;
	private readonly connector: DatabaseConnector;

	constructor() {
		if (!this.username || !this.password) throw new MissingCredentialsError();
		this.connector = new MongoDatabaseConnector(this.uri);
	}

	getConnector() {
		return this.connector;
	}
}
