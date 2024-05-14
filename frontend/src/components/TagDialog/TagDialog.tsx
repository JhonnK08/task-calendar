import { PopoverClose } from '@radix-ui/react-popover';
import { ReactElement, ReactNode, useRef } from 'react';
import { Tag } from 'src/api/types/tag';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover';
import TagForm from './TagForm';

interface TagDialogProperties {
	children: ReactNode;
	tag?: Tag;
}

function TagDialog({ children, tag }: TagDialogProperties): ReactElement {
	const closeReference = useRef<HTMLButtonElement>(null);

	function onFinish(): void {
		if (closeReference.current) {
			closeReference.current.click();
		}
	}

	return (
		<Popover>
			<PopoverClose ref={closeReference} />
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent className='w-80' align='start' side='top'>
				<div className='grid gap-4'>
					<div>
						<h4 className='text-center font-medium leading-none'>
							{tag ? 'Edição de tag' : 'Criar tag'}
						</h4>
					</div>
					<TagForm tag={tag} onFinish={onFinish} />
				</div>
			</PopoverContent>
		</Popover>
	);
}

export default TagDialog;
