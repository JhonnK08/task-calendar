import {
	UseMutationResult,
	useMutation,
	useQueryClient
} from '@tanstack/react-query';
import { useCallback } from 'react';
import { deleteTag } from 'src/api/requests/tag';
import { Tag } from 'src/api/types/tag';
import { useToast } from 'src/hooks/useToast';

export function useDeleteTag(): UseMutationResult<boolean, Error, string> {
	const { onErrorToast, onSuccessToast } = useToast();
	const queryClient = useQueryClient();

	const callDeleteTag = useCallback(async (tagId: string) => {
		const response = await deleteTag(tagId);

		return response.data;
	}, []);

	return useMutation({
		mutationKey: ['deleteTag'],
		mutationFn: callDeleteTag,
		onError: error => {
			console.error(error);
			onErrorToast(error.message);
		},
		onSuccess: (data, id) => {
			if (data) {
				queryClient.setQueryData(['onUpdateTags'], () => {});
				queryClient.setQueryData<Tag[]>(
					['fetchAllTags'],
					state => state?.filter(tag => tag.id !== id) ?? []
				);
			}

			onSuccessToast('Tag deletada com sucesso!');
		}
	});
}
