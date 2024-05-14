import { Tag } from 'src/tag/entities/tag.entity';

export class Task {
	id: string;
	title: string;
	description?: string;
	dateTime: string;
	duration: number;
	finished: boolean;
	tags: Tag[];
}
