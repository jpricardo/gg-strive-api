import mongoose, { mongo } from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const dbUri = `mongodb+srv://${username}:${password}@cluster0.leiy1eq.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('bufferCommands', false);

mongoose
	.connect(dbUri)
	.then(() => console.log('[DB] Connection established'))
	.catch((error) => console.error(error));

mongoose.connection.on('error', (error) => {
	console.error('* Error after connection!');
	console.error(error);
});

export default mongoose;
