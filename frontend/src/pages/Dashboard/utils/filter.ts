import { Task } from 'src/api/types/task';

export function filterTaskBySearch(
	task: Task,
	searchText: string,
	filteredTags: string[]
): boolean {
	const tagsId = task.tags.map(tag => tag.id);
	return (
		(searchText !== ''
			? task.title.toLowerCase().includes(searchText.toLowerCase().trim())
			: true) &&
		(filteredTags.length > 0
			? filteredTags.every(filteredTag => tagsId.includes(filteredTag))
			: true)
	);
}
