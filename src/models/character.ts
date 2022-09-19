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

enum MoveCategory {
	'Normal',
	'Command Normal',
	'Special',
	'Super',
}

const imageSchema = new db.Schema({
	name: { type: String, required: true },
	img: { type: String },
});

const frameDataSchema = new db.Schema({
	onHit: { type: String, required: false, trim: true, default: '' },
	onCounterHit: { type: String, required: false, trim: true, default: '' },
	onBlock: { type: String, required: false, trim: true, default: '' },
});

const moveSchema = new db.Schema({
	category: { type: String, enum: MoveCategory, required: true },
	moveType: String,
	guard: String,
	input: { type: String, required: true, trim: true },
	name: { type: String, required: false, trim: true },
	frameData: { type: frameDataSchema, required: true, default: {} },
});
/*
const commandNormalsSchema = new db.Schema({
	category: String,
	guard: String,
	input: { type: String, required: true, trim: true },
	name: { type: String, required: false, trim: true },
	frameData: { type: frameDataSchema, required: true, default: {} },
});
const specialsSchema = new db.Schema({
	category: String,
	guard: String,
	input: { type: String, required: true, trim: true },
	name: { type: String, required: false, trim: true },
	frameData: { type: frameDataSchema, required: true, default: {} },
});
const supersSchema = new db.Schema({
	category: String,
	guard: String,
	input: { type: String, required: true, trim: true },
	name: { type: String, required: false, trim: true },
	frameData: { type: frameDataSchema, required: true, default: {} },
});

const movesSchema = new db.Schema({
	normals: { type: [normalsSchema] },
	commandNormals: { type: [commandNormalsSchema] },
	specials: { type: [specialsSchema] },
	supers: { type: [supersSchema] },
});
*/
const characterSchema = new db.Schema(
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

const Character = db.model('Character', characterSchema);

export default Character;
