import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { deleteTag } from 'src/api/requests/tag';
import { useToast } from 'src/hooks/useToast';

export function useDeleteTag(): UseMutationResult<boolean, Error, string> {
	const { onErrorToast, onSuccessToast } = useToast();
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
		onSuccess: () => {
			onSuccessToast('Tag deletada com sucesso!');
		}
	});
}
