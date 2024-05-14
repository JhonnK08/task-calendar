import { Tag } from './tag';

export interface TaskPayload {
	title: string;
	description?: string;
	dateTime: string;
	duration: number;
	finished?: boolean;
	tags: string[];
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

export interface FetchTasksPayload {
	title?: string;
	startDate?: string;
	finalDate?: string;
}
