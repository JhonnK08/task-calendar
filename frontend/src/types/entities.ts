export interface Task {
	id: string;
	title: string;
	description?: string;
	dateTime: string;
	duration: number;
	finished: boolean;
}