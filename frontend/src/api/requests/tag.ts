import { AxiosResponse } from 'axios';
import { api } from '../instance';
import { Tag } from '../types/tag';

export async function fetchTags(): Promise<AxiosResponse<Tag[]>> {
	return api.get('/tag');
}
