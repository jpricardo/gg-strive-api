declare interface IFrameData {
	onBlock?: string; // Vantagem on block
	onHit?: string; // Vantagem on hit
	onCounterHit?: string; // Vantagem on counter hit
	// startup: number; // Frames de startup
	// active: number; // Frames ativos
	// recovery: number; // Frames de recovery
	// iFrames: number; // Frames de invulnerabilidade
	// invul: boolean; // Caso tenha invulnerabilidade
}

declare interface IMove {
	_id?: string;
	name?: string; // Ventania, Tatami Gaeshi, Grave Digger, etc.
	category: string; // Normal, Command Normal, Special, Super.
	moveType: string; // Strike, Throw, Movement
	input: string; // 2D, 234S, 523HS, c.S, etc.
	guard?: string; // Standing, Crounching, Both
	// damage: number; // Dano
	// airOnly: true; // Se só pode ser usado no ar
	frameData?: IFrameData;
}

type MoveList = Array<IMove>;

type BattleType = 'Balance' | 'One Shot' | 'Long Range' | 'Shooting' | 'Power' | 'Rush' | 'High Speed' | 'Technical' | 'Power Throw' | 'Unique';

declare interface IGetCharactersResponse {
	success: boolean;
	data: ICharacter[];
}

declare interface ICharacterResponse {
	success: boolean;
	data: ICharacter;
}

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
	moves: MoveList;
}

declare interface IUser {
	id: string;
	username: string;
	iat: number;
	email?: string;
	success?: boolean;
	error?: string;
}
