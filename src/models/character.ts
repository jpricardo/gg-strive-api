import db from '../controllers/db.js';

const getAllCharacters = () => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM characters', [], (error, results) => {
			if (error) reject(error);
			resolve(results.rows);
		});
	});
};

const getCharacterById = (id: string) => {
	return new Promise((resolve, reject) => {
		db.query('SELECT * FROM characters WHERE id = $1', [id], (error, results) => {
			if (error) reject(error);
			if (results.rowCount === 0) reject('Resource not found!');
			resolve(results.rows[0]);
		});
	});
};

export default { getAllCharacters, getCharacterById };
