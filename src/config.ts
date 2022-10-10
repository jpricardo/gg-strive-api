import dotenv from 'dotenv';
dotenv.config();

export default class Config {
	static readonly port = process.env.PORT ?? 8000;
	static readonly jwtSecret = process.env.JWT_SECRET ?? (Math.random() + 1).toString(36);
	static readonly dbUsername = process.env.DB_USERNAME;
	static readonly dbPassword = process.env.DB_PASSWORD;
	static readonly dbUri = `mongodb+srv://${this.dbUsername}:${this.dbPassword}@cluster0.leiy1eq.mongodb.net/?retryWrites=true&w=majority`;
}
