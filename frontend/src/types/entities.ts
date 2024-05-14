import { Color } from 'src/api/types/tag';

export interface Tag {
	id: string;
	name: string;
	color: Color;
}

export interface Task {
	id: string;
	title: string;
	description?: string;
	dateTime: string;
	duration: number;
	finished: boolean;
	tags: Tag[];
}
