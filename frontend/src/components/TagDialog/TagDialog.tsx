import { ReactElement, ReactNode } from 'react';
import { Tag } from 'src/api/types/tag';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover';
import TagForm from './TagForm';

interface TagDialogProperties {
	children: ReactNode;
	tag?: Tag;
}

function TagDialog({ children, tag }: TagDialogProperties): ReactElement {
	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent className='w-80' align='start' side='top'>
				<div className='grid gap-4'>
					<div>
						<h4 className='text-center font-medium leading-none'>
							{tag ? 'Edição de tag' : 'Criar tag'}
						</h4>
					</div>
					<TagForm tag={tag} />
				</div>
			</PopoverContent>
		</Popover>
	);
}

export default TagDialog;
