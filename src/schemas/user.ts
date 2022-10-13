import Config from '../config.js';
import MongoDatabaseConnector from '../db/implementations/mongo-database-connector.js';

export const connector = new MongoDatabaseConnector(Config.dbUri);
connector.connect();

export const userSchema = new connector.Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
			lowercase: true,
			trim: true,
		},
		email: { type: String, lowercase: true, trim: true },
		password: { type: String, required: true },
	},
	{ collection: 'users' }
);
