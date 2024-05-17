import { ReactElement } from 'react';
import { Tag } from 'src/api/types/tag';
import TagDialog from 'src/components/TagDialog/TagDialog';
import { Badge } from 'src/components/ui/Badge';
import { ToggleGroup, ToggleGroupItem } from 'src/components/ui/ToogleGroup';
import { useFetchTags } from 'src/hooks/useFetchTags';
import { getTagColor } from 'src/utils/tagColor';

interface ToggleTagsProperties {
	selectedTags: Tag[];
}

export default function ToggleTags({
	selectedTags
}: ToggleTagsProperties): ReactElement | null {
	const { data: fetchedTags } = useFetchTags();

	if (!fetchedTags) {
		return null;
	}

	return (
		<ToggleGroup type='multiple' value={selectedTags.map(item => item.id)}>
			<div className='flex items-start justify-start gap-1'>
				{fetchedTags.map(tag => (
					<TagDialog tag={tag} key={'dialog-' + tag.id}>
						<ToggleGroupItem value={tag.id}>
							<Badge
								className='mx-px'
								style={{
									backgroundColor: getTagColor(tag.color)
								}}
								key={tag.id}
							>
								{tag.name}
							</Badge>
						</ToggleGroupItem>
					</TagDialog>
				))}
			</div>
		</ToggleGroup>
	);
}
