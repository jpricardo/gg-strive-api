declare interface IMove {
	name?: string; // Ventania, Tatami Gaeshi, Grave Digger, etc.
	category: string; // Strike, Throw, Movement
	input: string; // 2D, 234S, 523HS, c.S, etc.
	guard?: string; // Standing, Crounching, Both
	// airOnly: true; // Se só pode ser usado no ar
	// invul: boolean; // Caso tenha invulnerabilidade
	// iFrames: number; // Frames de invulnerabilidade
	// damage: number; // Dano
	// startup: number; // Frames de startup
	// active: number; // Frames ativos
	// recovery: number; // Frames de recovery
	// onBlock: number; // Vantagem on block
	// onHit: number; // Vantagem on hit
	// onCounterHit: number; // Vantagem on counter hit
}

declare interface INormal extends IMove {}

declare interface ICommandNormal extends IMove {}

declare interface ISpecial extends IMove {
	// airOk: string; // Se pode ser usado no ar
	// reversal: true; // Caso seja um reversal
}

declare interface ISuper extends ISpecial {}

declare interface IMoveList {
	normals: INormal[];
	commandNormals: ICommandNormal[];
	specials: ISpecial[];
	supers: ISuper[];
}

type BattleType = 'Balance' | 'One Shot' | 'Long Range' | 'Shooting' | 'Power' | 'Rush' | 'High Speed' | 'Technical' | 'Power Throw' | 'Unique';

declare interface ICharacter {
	_id: string;
	name: string;
	displayName: string;
	portrait: {
		name: string;
		img: string;
	};
	battleType: BattleType;
	easyToUse: number;
	moves: IMoveList;
}

declare interface IUser {
	id: string;
	username: string;
	iat: number;
	email?: string;
	success?: boolean;
	error?: string;
}
