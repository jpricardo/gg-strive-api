import mongoose from 'mongoose';
import AlreadyConnectedError from '../errors/already-connected-error.js';
import AlreadyDisconnectedError from '../errors/already-disconnected-error.js';
import InvalidUriError from '../errors/invalid-uri-error.js';

export default class DatabaseConnector {
	private validUriStringStartsWith = ['mongodb://', 'mongodb+srv://'];

	private uri: string;
	private connected = false;

	get isConnected() {
		return this.connected;
	}

	private setIsConnected(value: boolean) {
		this.connected = value;
	}

	private readonly driver = mongoose;
	private readonly connection = this.driver.connection;

	readonly Schema = mongoose.Schema;
	readonly model = mongoose.model;

	constructor(uri: string) {
		if (!(typeof uri === 'string') || uri.length === 0) {
			throw new InvalidUriError();
		} else {
			this.uri = uri;
			this.validateUriString();
			this.setupDriver();
			this.setupErrorHandler();
		}
	}

	private validateUriString() {
		let valid = false;
		this.validUriStringStartsWith.forEach((value, index, arr) => {
			if (this.uri.startsWith(value)) valid = true;
			if (index === arr.length - 1 && !valid) throw new InvalidUriError(this.uri);
		});
	}

	private setupDriver() {
		this.driver.set('bufferCommands', false);
	}

	private setupErrorHandler() {}

	async connect() {
		this.throwIfConnected();
		await this.connectToDatabase();
		this.setIsConnected(true);
		console.log('[DB] Connection established');
	}

	private throwIfConnected() {
		if (this.isConnected) throw new AlreadyConnectedError();
	}

	private connectToDatabase() {
		return this.driver.connect(this.uri);
	}

	async disconnect() {
		this.throwIfDisconnected();
		this.closeConnection();
		this.setIsConnected(false);
	}

	private throwIfDisconnected() {
		if (!this.isConnected) throw new AlreadyDisconnectedError();
	}

	private async closeConnection() {
		await this.connection.close();
	}
}
