import DataBase from '../db/database.js';

const connector = new DataBase().getConnector();
connector.connect();

const userSchema = new connector.Schema(
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

const User = connector.model('User', userSchema);

export default User;
