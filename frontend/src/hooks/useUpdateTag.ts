import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { updateTag } from 'src/api/requests/tag';
import { Tag, TagPayload } from 'src/api/types/tag';
import { useToast } from 'src/hooks/useToast';

interface UpdatePayload {
	tagId: string;
	payload: Partial<TagPayload>;
}

export function useUpdateTag(): UseMutationResult<Tag, Error, UpdatePayload> {
	const { onErrorToast, onSuccessToast } = useToast();
	const callUpdateTag = useCallback(
		async ({ tagId, payload }: UpdatePayload) => {
			const response = await updateTag(tagId, payload);

			return response.data;
		},
		[]
	);

	return useMutation({
		mutationKey: ['updateTag'],
		mutationFn: callUpdateTag,
		onError: error => {
			console.error(error);
			onErrorToast(error.message);
		},
		onSuccess: () => {
			onSuccessToast('Tag atualizada com sucesso!');
		}
	});
}
