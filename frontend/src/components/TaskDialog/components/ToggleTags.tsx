import { ReactElement, useEffect, useState } from 'react';
import { Tag as TagType } from 'src/api/types/tag';
import Tag from 'src/components/Tag/Tag';
import { ToggleGroup, ToggleGroupItem } from 'src/components/ui/ToogleGroup';
import { useFetchTags } from 'src/hooks/useFetchTags';

interface ToggleTagsProperties {
	selectedTags?: TagType[];
	onChangeTags: (newTags: string[]) => void;
}

export default function ToggleTags({
	selectedTags,
	onChangeTags
}: ToggleTagsProperties): ReactElement | null {
	const [defaultTags, setDefaultTags] = useState<string[]>([]);

	const { data: fetchedTags } = useFetchTags();

	function onSelectTag(id: string): void {
		setDefaultTags(previousValues => {
			let newValues: string[];

			if (previousValues.includes(id)) {
				newValues = previousValues.filter(item => item !== id);
			}
			newValues = [...previousValues, id];

			onChangeTags(newValues);
			return newValues;
		});
	}

	useEffect(() => {
		if (selectedTags && selectedTags.length > 0) {
			setDefaultTags(selectedTags.map(item => item.id));
		}
	}, [selectedTags]);

	if (!fetchedTags) {
		return null;
	}

	return (
		<ToggleGroup type='multiple' defaultValue={defaultTags}>
			<div className='flex items-start justify-start gap-1'>
				{fetchedTags.map(tag => (
					<ToggleGroupItem
						value={tag.id}
						className='group h-auto rounded-full p-0'
						onClick={() => onSelectTag(tag.id)}
					>
						<Tag {...tag} selected={defaultTags.includes(tag.id)} />
					</ToggleGroupItem>
				))}
			</div>
		</ToggleGroup>
	);
}
