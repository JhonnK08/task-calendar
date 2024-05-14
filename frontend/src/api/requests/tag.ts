import { AxiosResponse } from 'axios';
import { api } from '../instance';
import { Tag, TagPayload } from '../types/tag';

export async function createTag(
	payload: TagPayload
): Promise<AxiosResponse<Tag>> {
	return api.post('/tag', payload);
}

export async function deleteTag(
	tagId: string
): Promise<AxiosResponse<boolean>> {
	return api.delete(`/tag/${tagId}`);
}

export async function fetchTags(): Promise<AxiosResponse<Tag[]>> {
	return api.get('/tag');
}

export async function updateTag(tagId: string, payload: Partial<TagPayload>) {
	return api.patch(`/tag/${tagId}`, payload);
}
