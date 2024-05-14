import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { fetchTasks } from 'src/api/requests/task';
import { Task } from 'src/api/types/task';
import { useToast } from 'src/hooks/useToast';

export function useFetchTasks(date?: string): UseQueryResult<Task[]> {
	const { onErrorToast } = useToast();
	const callFetchTasks = useCallback(async () => {
		const response = await fetchTasks(
			date
				? {
						startDate: date,
						finalDate: date
					}
				: {}
		);
		return response.data;
	}, [date]);

	return useQuery({
		queryKey: ['fetchTasks', date],
		queryFn: callFetchTasks,
		throwOnError: (error: Error): boolean => {
			onErrorToast(error.message);
			return true;
		}
	});
}
