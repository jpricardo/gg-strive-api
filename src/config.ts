import dotenv from 'dotenv';
dotenv.config();

export default class Config {
	static port = process.env.PORT ?? 8000;
	static jwtSecret = process.env.JWT_SECRET ?? (Math.random() + 1).toString(36);
}
