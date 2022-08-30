import db from '../db.js';

enum BatteType {
	'Balance',
	'Long Range',
	'High Speed',
	'Power Throw',
	'Unique',
	'Technical',
	'Shooting',
	'One Shot',
	'Rush',
	'Power',
}

const characterSchema = new db.Schema(
	{
		name: { type: String, required: true },
		displayName: { type: String },
		battleType: { type: String, enum: BatteType },
		easyToUse: { type: Number, enum: [1, 2, 3, 4, 5] },
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
