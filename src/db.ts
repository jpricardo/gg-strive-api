import mongoose, { mongo } from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

class DatabaseConnector {
	private uri;

	Schema = mongoose.Schema;
	model = mongoose.model;

	constructor(uri: string) {
		this.uri = uri;
		this.connect();
	}

	private async connect() {
		mongoose.set('bufferCommands', false);

		await mongoose
			.connect(this.uri)
			.then(() => console.log('[DB] Connection established'))
			.catch((error) => console.error(error));

		mongoose.connection.on('error', (error) => {
			console.error('* Error after connection!');
			console.error(error);
		});

		return mongoose;
	}
}

class DataBase {
	private username = process.env.DB_USERNAME;
	private password = process.env.DB_PASSWORD;
	private uri = `mongodb+srv://${this.username}:${this.password}@cluster0.leiy1eq.mongodb.net/?retryWrites=true&w=majority`;
	private connector;

	constructor() {
		if (!this.username || !this.password) throw new Error('Missing connection parameters');
		this.connector = new DatabaseConnector(this.uri);
	}

	getConnection() {
		return this.connector;
	}
}

export default new DataBase().getConnection();
