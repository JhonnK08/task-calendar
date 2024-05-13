import { Plus } from 'lucide-react';
import { ReactElement } from 'react';
import TaskDialog from '../TaskDialog/TaskDialog';
import { Button } from '../ui/Button';

function NewTaskButton(): ReactElement {
	return (
		<TaskDialog>
			<Button
				variant='default'
				className='flex items-center justify-center gap-x-2 px-2'
			>
				<Plus className='h-5 w-5' />
				<span className='text-base font-bold'>Nova tarefa</span>
			</Button>
		</TaskDialog>
	);
}

export default NewTaskButton;
