import { CirclePlus } from 'lucide-react';
import { ReactElement } from 'react';
import { useFetchTags } from 'src/hooks/useFetchTags';
import { Task } from 'src/types/entities';
import { cn } from 'src/utils';
import TagDialog from '../TagDialog/TagDialog';
import { MAX_TAGS_NUMBER } from '../TagDialog/constants/tagNumber';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Label } from '../ui/Label';

interface TagsContentProperties {
	task?: Task;
}

function TagsContent({ task }: TagsContentProperties): ReactElement {
	const { data: tags } = useFetchTags();

	return (
		<div className='flex flex-col items-start gap-4'>
			<div className='flex items-center'>
				<Label>Tags</Label>
			</div>
			<div>
				{task && task?.tags.length > 0 && (
					<>
						{task?.tags.map(tag => (
							<TagDialog tag={tag}>
								<Badge className={cn(`!bg-[${tag.color}]`)}>
									{tag.name}
								</Badge>
							</TagDialog>
						))}
					</>
				)}
				{(!task || task?.tags.length < MAX_TAGS_NUMBER) && (
					<TagDialog>
						<Button variant='outline'>
							<CirclePlus className='h-4 w-4' />
						</Button>
					</TagDialog>
				)}
			</div>
		</div>
	);
}

export default TagsContent;
