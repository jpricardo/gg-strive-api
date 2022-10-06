export enum BattleType {
	'Balance' = 'Balance',
	'Long Range' = 'Long Range',
	'High Speed' = 'High Speed',
	'Power Throw' = 'Power Throw',
	'Unique' = 'Unique',
	'Technical' = 'Technical',
	'Shooting' = 'Shooting',
	'One Shot' = 'One Shot',
	'Rush' = 'Rush',
	'Power' = 'Power',
}

export enum MoveCategory {
	'Normal' = 'Normal',
	'Command Normal' = 'Command Normal',
	'Special' = 'Special',
	'Super' = 'Super',
}

type imageSchema = { name: string; img: string };

type frameDataSchema = {
	onHit: string;
	onCounterHit: string;
	onBlock: string;
};

type moveSchema = {
	category: keyof typeof MoveCategory;
	moveType: string;
	guard: string;
	input: string;
	name: string;
	frameData: frameDataSchema;
};

export interface CharacterProps {
	name: string;
	displayName: string;
	battleType: BattleType;
	easyToUse: number;
	moves: Array<moveSchema>;
	portrait?: imageSchema;
}
