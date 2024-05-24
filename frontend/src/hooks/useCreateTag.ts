import {
	UseMutationResult,
	useMutation,
	useQueryClient
} from '@tanstack/react-query';
import { useCallback } from 'react';
import { createTag } from 'src/api/requests/tag';
import { Tag, TagPayload } from 'src/api/types/tag';
import { useToast } from './useToast';

export function useCreateTag(): UseMutationResult<Tag, Error, TagPayload> {
	const { onErrorToast, onSuccessToast } = useToast();
	const queryClient = useQueryClient();

	const callCreateTag = useCallback(async (payload: TagPayload) => {
		const response = await createTag(payload);

		return response.data;
	}, []);

	return useMutation({
		mutationKey: ['createTag'],
		mutationFn: callCreateTag,
		onError: error => {
			console.error(error);
			onErrorToast(error.message);
		},
		onSuccess: data => {
			if (data) {
				queryClient.setQueryData(['onUpdateTags'], () => {});
				queryClient.setQueryData<Tag[]>(['fetchAllTags'], state => [
					...(state ?? []),
					data
				]);
			}
			onSuccessToast('Tag criada com sucesso!');
		}
	});
}
