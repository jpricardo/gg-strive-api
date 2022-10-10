import mongoose from 'mongoose';
import DatabaseConnector from './database-connector.js';

export default class MongoDatabaseConnector extends DatabaseConnector {
	validUriStringStartsWith = ['mongodb://', 'mongodb+srv://'];
	uri: string;

	readonly driver = mongoose;
	readonly connection = this.driver.connection;

	readonly Schema = mongoose.Schema;
	readonly model = mongoose.model;

	constructor(uri: string) {
		super();
		this.uri = uri;
		this.setupConnector();
	}

	setupDriver() {
		this.driver.set('bufferCommands', false);
	}

	setupErrorHandler() {}

	connectToDatabase() {
		return this.driver.connect(this.uri);
	}

	closeConnection() {
		return this.connection.close();
	}
}
