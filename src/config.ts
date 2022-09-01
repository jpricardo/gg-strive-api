import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT ?? 8000;
const jwtSecret = process.env.JWT_SECRET ?? (Math.random() + 1).toString(36);

export default { port, jwtSecret };
