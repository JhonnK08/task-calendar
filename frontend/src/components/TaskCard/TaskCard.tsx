import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Check } from 'lucide-react';
import { MouseEvent, ReactElement } from 'react';
import { useUpdateTask } from 'src/pages/Dashboard/hooks/useUpdateTask';
import { Task } from 'src/types/entities';
import { cn } from 'src/utils';
import { formatDuration } from 'src/utils/duration';
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
	task: Task;
	loading?: boolean;
}

function TaskCard({ task }: TaskCardProperties): ReactElement {
	const { mutate: updateTask } = useUpdateTask();
	const onClickFinishButton = (
		event: MouseEvent<HTMLButtonElement>
	): void => {
		event.stopPropagation();
		updateTask({
			payload: {
				finished: true
			},
			taskId: task.id
		});
	};

	return (
		<TaskDialog task={task}>
			<Card
				className={cn(
					'group relative mt-2 w-full cursor-pointer bg-secondary p-4 shadow-sm first-of-type:mt-4 hover:border hover:border-primary',
					{
						'line-through opacity-40': !!task.finished
					}
				)}
			>
				<CardHeader className='p-0'>
					<CardTitle className='truncate'>{task.title}</CardTitle>
					<CardDescription>
						Duração: {formatDuration(task.duration)}
					</CardDescription>
				</CardHeader>
				<CardContent className='p-0'>
					<span className='text-left'>
						{format(parseISO(task.dateTime), 'Pp', {
							locale: ptBR
						})}
					</span>
					<div className='absolute right-2 top-2 flex items-center justify-center gap-x-2'>
						{!task.finished && (
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant='ghost'
										className='h-5 p-1'
										onClick={onClickFinishButton}
									>
										<Check className='h-4 w-4' />
									</Button>
								</TooltipTrigger>
								<TooltipContent side='bottom'>
									<p>Finalizar</p>
								</TooltipContent>
							</Tooltip>
						)}
						{task.finished && (
							<p className='hidden text-sm no-underline group-hover:block'>
								Finalizada
							</p>
						)}
					</div>
				</CardContent>
			</Card>
		</TaskDialog>
	);
}

export default TaskCard;
