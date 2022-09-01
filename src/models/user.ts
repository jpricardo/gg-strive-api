import db from '../db.js';

const userSchema = new db.Schema(
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

const User = db.model('User', userSchema);

export default User;
