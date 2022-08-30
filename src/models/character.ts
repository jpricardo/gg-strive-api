import db from '../db.js';

const characterSchema = new db.Schema(
	{
		name: { type: String, required: true },
		moves: {
			type: [
				{
					name: String,
					input: String,
					airOk: Boolean,
					damage: Number,
				},
			],
		},
	},
	{ collection: 'characters' }
);

const Character = db.model('Character', characterSchema);

export default Character;
