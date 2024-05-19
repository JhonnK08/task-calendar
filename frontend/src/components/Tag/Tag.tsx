import { Ellipsis } from 'lucide-react';
import { ReactElement } from 'react';
import { Tag as TagType } from 'src/api/types/tag';
import { cn } from 'src/utils';
import { getTagColor } from 'src/utils/tagColor';
import TagDialog from '../TagDialog/TagDialog';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/Tooltip';

type TagProperties = TagType & { selected: boolean };

export default function Tag({
	color,
	id,
	name,
	selected = false
}: TagProperties): ReactElement {
	return (
		<>
			<Badge
				className={cn(
					'group mx-px flex items-center justify-center gap-x-1',
					{
						'border-2 border-white': selected
					}
				)}
				style={{
					backgroundColor: getTagColor(color)
				}}
				key={id}
			>
				<span>{name}</span>
				{
					<TagDialog tag={{ id, color, name }} key={'dialog-' + id}>
						<Button
							variant='link'
							className='invisible ml-1 h-4 w-0 p-0 transition-all duration-100 ease-in group-hover:visible group-hover:w-4'
							onClick={e => e.stopPropagation()}
						>
							<Tooltip>
								<TooltipTrigger asChild>
									<Ellipsis className='h-4 w-4 text-white hover:opacity-65' />
								</TooltipTrigger>
								<TooltipContent side='top'>
									<p>Opções</p>
								</TooltipContent>
							</Tooltip>
						</Button>
					</TagDialog>
				}
			</Badge>
		</>
	);
}
