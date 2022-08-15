import postgres from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const database = process.env.POSTGRES_DB;

const pgOptions = {
	host: 'localhost',
	port: 5432,
	user,
	database,
	password,
};
const pool = new postgres.Pool(pgOptions);

export default pool;
