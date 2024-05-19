import { CircleHelp } from 'lucide-react';
import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { Task } from 'src/types/entities';
import FormDurationInput from '../Input/FormDurationInput';
import FormTextArea from '../Input/FormTextArea';
import { Label } from '../ui/Label';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/Tooltip';
import TagsContent from './TagsContent';

interface TaskDialogContentProperties {
	task?: Task;
}

function TaskDialogContent({
	task
}: TaskDialogContentProperties): ReactElement {
	const { control } = useFormContext<TaskFormData>();
	return (
		<div className='grid gap-4 pb-2 pt-4'>
			<div className='flex flex-col items-start gap-4'>
				<Label htmlFor='description' className='text-right'>
					Descrição
				</Label>
				<FormTextArea
					name='description'
					id='description'
					maxLength={200}
					control={control}
				/>
			</div>
			<div className='flex flex-col items-start gap-4'>
				<div className='flex items-center'>
					<Label htmlFor='duration' className='text-left'>
						Duração
					</Label>
					<Tooltip>
						<TooltipTrigger>
							<CircleHelp className='ml-1 h-4 w-4 cursor-default' />
						</TooltipTrigger>
						<TooltipContent side='top'>
							<p>
								Formato em hh:mm:ss (Horas, minutos, segundos)
							</p>
						</TooltipContent>
					</Tooltip>
				</div>
				<FormDurationInput control={control} name='duration' />
			</div>
			<TagsContent task={task} />
		</div>
	);
}

export default TaskDialogContent;
