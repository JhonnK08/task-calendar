import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { deleteTask } from 'src/api/requests/task';
import { useToast } from 'src/hooks/useToast';

export function useDeleteTask(): UseMutationResult<boolean, Error, string> {
	const { onErrorToast, onSuccessToast } = useToast();
	const callDeleteTask = useCallback(async (taskId: string) => {
		const response = await deleteTask(taskId);

		return response.data;
	}, []);

	return useMutation({
		mutationKey: ['deleteTask'],
		mutationFn: callDeleteTask,
		onError: error => {
			console.error(error);
			onErrorToast(error.message);
		},
		onSuccess: () => {
			onSuccessToast('Task deletada com sucesso!');
		}
	});
}
