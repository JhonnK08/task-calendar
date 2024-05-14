import { AxiosResponse } from 'axios';
import { Task } from 'src/types/entities';
import { api } from '../instance';
import { FetchTasksPayload, TaskPayload } from '../types/task';

export async function createTask(
	payload: TaskPayload
): Promise<AxiosResponse<Task>> {
	return api.post('/task', payload);
}

export async function deleteTask(
	taskId: string
): Promise<AxiosResponse<boolean>> {
	return api.delete(`/task/${taskId}`);
}

export async function fetchTasks(
	params: FetchTasksPayload
): Promise<AxiosResponse<Task[]>> {
	return api.get('/task', {
		params: params
	});
}

export async function updateTask(
	taskId: string,
	payload: Partial<TaskPayload>
): Promise<AxiosResponse<Task>> {
	return api.put(`/task/${taskId}`, payload);
}
