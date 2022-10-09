import DataBase from '../db/database.js';

const connector = new DataBase().getConnector();
connector.connect();

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

enum MoveCategory {
	'Normal',
	'Command Normal',
	'Special',
	'Super',
}

const imageSchema = new connector.Schema({
	name: { type: String, required: true },
	img: { type: String },
});

const frameDataSchema = new connector.Schema({
	onHit: { type: String, required: false, trim: true, default: '' },
	onCounterHit: { type: String, required: false, trim: true, default: '' },
	onBlock: { type: String, required: false, trim: true, default: '' },
});

const moveSchema = new connector.Schema({
	category: { type: String, enum: MoveCategory, required: true },
	moveType: String,
	guard: String,
	input: { type: String, required: true, trim: true },
	name: { type: String, required: false, trim: true },
	frameData: { type: frameDataSchema, required: true, default: {} },
});

const characterSchema = new connector.Schema(
	{
		name: { type: String, required: true },
		displayName: { type: String },
		battleType: { type: String, enum: BatteType },
		easyToUse: { type: Number, enum: [1, 2, 3, 4, 5] },
		portrait: imageSchema,
		moves: {
			type: [moveSchema],
			required: true,
			default: [],
		},
	},
	{ collection: 'characters' }
);

const Character = connector.model('Character', characterSchema);

export default Character;
