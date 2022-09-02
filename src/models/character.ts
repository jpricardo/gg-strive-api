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

const imageSchema = new db.Schema({
	name: { type: String, required: true },
	img: { type: String },
});

const normalsSchema = new db.Schema({
	category: String,
	input: String,
	guard: String,
	name: { type: String, required: false, trim: true },
});
const commandNormalsSchema = new db.Schema({
	category: String,
	input: String,
	guard: String,
	name: { type: String, required: false, trim: true },
});
const specialsSchema = new db.Schema({
	category: String,
	input: String,
	guard: String,
	name: { type: String, required: false, trim: true },
});
const supersSchema = new db.Schema({
	category: String,
	input: String,
	guard: String,
	name: { type: String, required: false, trim: true },
});

const movesSchema = new db.Schema({
	normals: { type: [normalsSchema] },
	commandNormals: { type: [commandNormalsSchema] },
	specials: { type: [specialsSchema] },
	supers: { type: [supersSchema] },
});

const characterSchema = new db.Schema(
	{
		name: { type: String, required: true },
		displayName: { type: String },
		battleType: { type: String, enum: BatteType },
		easyToUse: { type: Number, enum: [1, 2, 3, 4, 5] },
		portrait: imageSchema,
		moves: {
			type: movesSchema,
			required: true,
			default: { normals: [], specials: [], supers: [] },
		},
	},
	{ collection: 'characters' }
);

const Character = db.model('Character', characterSchema);

export default Character;
