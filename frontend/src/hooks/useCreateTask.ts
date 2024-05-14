import {
	UseMutationResult,
	useMutation,
	useQueryClient
} from '@tanstack/react-query';
import { formatISO, parseISO } from 'date-fns';
import { useCallback } from 'react';
import { createTask } from 'src/api/requests/task';
import { TaskPayload } from 'src/api/types/task';
import { Task } from 'src/types/entities';
import { useToast } from './useToast';

export function useCreateTask(): UseMutationResult<Task, Error, TaskPayload> {
	const { onErrorToast, onSuccessToast } = useToast();
	const queryClient = useQueryClient();

	const callCreateTask = useCallback(async (payload: TaskPayload) => {
		const response = await createTask(payload);

		return response.data;
	}, []);

	return useMutation({
		mutationKey: ['createTask'],
		mutationFn: callCreateTask,
		onError: error => {
			console.error(error);
			onErrorToast(error.message);
		},
		onSuccess: data => {
			queryClient.invalidateQueries({
				queryKey: [
					'fetchTasks',
					formatISO(parseISO(data.dateTime), {
						representation: 'date'
					})
				]
			});
			onSuccessToast('Task criada com sucesso!');
		}
	});
}
