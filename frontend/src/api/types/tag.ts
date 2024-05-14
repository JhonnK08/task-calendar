export enum Color {
	RED = 'RED',
	BLUE = 'BLUE',
	GREEN = 'GREEN',
	YELLOW = 'YELLOW',
	ORANGE = 'ORANGE',
	PURPLE = 'PURPLE',
	PINK = 'PINK',
	BROWN = 'BROWN',
	GRAY = 'GRAY',
	BLACK = 'BLACK'
}

export interface Tag {
	id: string;
	name: string;
	color: Color;
}
