import { Check } from 'lucide-react';
import { ReactElement } from 'react';
import { Task } from 'src/types/entities';
import TaskDialog from '../TaskDialog/TaskDialog';
import { Button } from '../ui/Button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../ui/Card';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/Tooltip';

interface TaskCardProperties {
	task?: Task;
	loading?: boolean;
}

function TaskCard({ task }: TaskCardProperties): ReactElement {
	return (
		<TaskDialog task={task}>
			<Card className='relative mt-2 w-full cursor-pointer bg-secondary p-4 shadow-sm first-of-type:mt-4 hover:border hover:border-primary'>
				<CardHeader className='p-0'>
					<CardTitle className='truncate'>Task</CardTitle>
					<CardDescription>Duration: 10hrs</CardDescription>
				</CardHeader>
				<CardContent className='p-0'>
					<span className='text-left'>00:00:00</span>
					<div className='absolute right-2 top-2 flex items-center justify-center gap-x-2'>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant='ghost'
									className='h-5 p-1'
									onClick={event => event.stopPropagation()}
								>
									<Check className='h-4 w-4' />
								</Button>
							</TooltipTrigger>
							<TooltipContent side='bottom'>
								<p>Finalizar</p>
							</TooltipContent>
						</Tooltip>
					</div>
				</CardContent>
			</Card>
		</TaskDialog>
	);
}

export default TaskCard;
