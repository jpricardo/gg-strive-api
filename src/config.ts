import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT ?? 8000;

export default { port };
