import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const dbUri = `mongodb+srv://${username}:${password}@cluster0.leiy1eq.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(dbUri, () => console.log('Mongoose conectado!'));

export default mongoose;
