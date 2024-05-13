export interface TaskPayload {
	title: string;
	description?: string;
	dateTime: string;
	duration: number;
	finished?: boolean;
}

export interface Task {
	id: string;
	title: string;
	description?: string;
	dateTime: string;
	duration: number;
	finished: boolean;
}

export interface FetchTasksPayload {
	title?: string;
	startDate?: string;
	finalDate?: string;
}
