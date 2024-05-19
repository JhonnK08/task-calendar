import { CirclePlus } from 'lucide-react';
import { ReactElement } from 'react';
import { useFetchTags } from 'src/hooks/useFetchTags';
import { Task } from 'src/types/entities';
import TagDialog from '../TagDialog/TagDialog';
import { MAX_TAGS_NUMBER } from '../TagDialog/constants/tagNumber';
import { Button } from '../ui/Button';
import { Label } from '../ui/Label';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/Tooltip';
import ToggleTags from './components/ToggleTags';

interface TagsContentProperties {
	task?: Task;
}

function TagsContent({ task }: TagsContentProperties): ReactElement {
	const { data: fetchedTags } = useFetchTags();

	return (
		<div className='flex flex-col items-start gap-4'>
			<div className='flex items-center'>
				<Label>Tags</Label>
			</div>
			<div>
				<ToggleTags selectedTags={task?.tags} />
				{(!fetchedTags || fetchedTags.length < MAX_TAGS_NUMBER) && (
					<Tooltip>
						<TagDialog>
							<TooltipTrigger asChild>
								<Button variant='outline' className='mt-2'>
									<CirclePlus className='h-4 w-4' />
								</Button>
							</TooltipTrigger>
						</TagDialog>
						<TooltipContent side='bottom'>
							<p>Criar tag</p>
						</TooltipContent>
					</Tooltip>
				)}
			</div>
		</div>
	);
}

export default TagsContent;
