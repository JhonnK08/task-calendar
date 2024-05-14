import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { fetchTags } from 'src/api/requests/tag';
import { Tag } from 'src/api/types/tag';

export function useFetchTags(): UseQueryResult<Tag[]> {
	const callFetchTags = useCallback(async () => {
		const response = await fetchTags();

		return response.data;
	}, []);

	return useQuery({
		queryKey: ['fetchAllTags'],
		queryFn: callFetchTags
	});
}
