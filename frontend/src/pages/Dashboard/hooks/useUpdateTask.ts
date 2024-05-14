import {
	UseMutationResult,
	useMutation,
	useQueryClient
} from '@tanstack/react-query';
import { useCallback } from 'react';
import { updateTask } from 'src/api/requests/task';
import { TaskPayload } from 'src/api/types/task';
import { useToast } from 'src/hooks/useToast';
import { Task } from 'src/types/entities';

interface UpdatePayload {
	taskId: string;
	payload: Partial<TaskPayload>;
}

export function useUpdateTask(): UseMutationResult<Task, Error, UpdatePayload> {
	const { onErrorToast, onSuccessToast } = useToast();
	const queryClient = useQueryClient();

	const callUpdateTask = useCallback(
		async ({ taskId, payload }: UpdatePayload): Promise<Task> => {
			const response = await updateTask(taskId, payload);

			return response.data;
		},
		[]
	);

	return useMutation({
		mutationKey: ['updateTask'],
		mutationFn: callUpdateTask,
		onError: error => {
			console.error(error);
			onErrorToast(error.message);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				predicate: query => query.queryKey.includes('fetchTasks')
			});
			onSuccessToast('Task atualizada com sucesso!');
		}
	});
}
