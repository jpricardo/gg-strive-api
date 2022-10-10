import AlreadyConnectedError from '../errors/already-connected-error.js';
import AlreadyDisconnectedError from '../errors/already-disconnected-error.js';
import DoNotInstantiateError from '../errors/do-not-instantiate-error.js';
import InvalidUriError from '../errors/invalid-uri-error.js';

export default abstract class DatabaseConnector {
	private connected = false;

	abstract validUriStringStartsWith: string[];
	abstract uri: string;
	abstract readonly driver: any;
	abstract readonly connection: any;
	abstract readonly Schema: any;
	abstract readonly model: any;

	constructor() {
		if (this.constructor === DatabaseConnector) {
			throw new DoNotInstantiateError();
		}
	}

	setupConnector() {
		this.validateUriString();
		this.setupDriver();
		this.setupErrorHandler();
	}

	validateUriString() {
		let valid = false;
		this.validUriStringStartsWith.forEach((value, index, arr) => {
			if (this.uri.startsWith(value)) valid = true;
			if (index === arr.length - 1 && !valid) throw new InvalidUriError(this.uri);
		});
	}

	abstract setupDriver(): void;
	abstract setupErrorHandler(): void;
	abstract connectToDatabase(): Promise<any>;
	abstract closeConnection(): Promise<any>;

	async connect() {
		this.throwIfConnected();
		await this.connectToDatabase();
		this.connected = true;
		console.log('[DB] Connection established');
	}

	private throwIfConnected() {
		if (this.connected) throw new AlreadyConnectedError();
	}

	async disconnect() {
		this.throwIfDisconnected();
		this.closeConnection();
		this.connected = false;
	}

	private throwIfDisconnected() {
		if (!this.connected) throw new AlreadyDisconnectedError();
	}
}
