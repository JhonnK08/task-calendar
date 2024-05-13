import { zodResolver } from '@hookform/resolvers/zod';
import { CircleHelp } from 'lucide-react';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { Task } from 'src/types/entities';
import { cn } from 'src/utils';
import ConfirmDeletionDialog from '../ConfirmDeletionDialog/ConfirmDeletionDialog';
import FormDurationInput from '../Input/FormDurationInput';
import FormTextArea from '../Input/FormTextArea';
import { Button } from '../ui/Button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '../ui/Dialog';
import { Label } from '../ui/Label';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/Tooltip';
import FormTitleInput from './components/FormTitleInput';
import { schema } from './constants/schema';

interface TaskDialogProperties {
	children: ReactElement;
	task?: Task;
}

function TaskDialog({ task, children }: TaskDialogProperties): ReactElement {
	const { control, handleSubmit } = useForm<TaskFormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			title: '',
			duration: '000000'
		}
	});

	function onSubmit(data: TaskFormData): void {
		console.log('data', data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Dialog>
				<DialogTrigger asChild>{children}</DialogTrigger>
				<DialogContent className='p-4 sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>
							<FormTitleInput control={control} name='title' />
						</DialogTitle>
					</DialogHeader>
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
								<Label
									htmlFor='duration'
									className='text-right'
								>
									Duração
								</Label>
								<Tooltip>
									<TooltipTrigger>
										<CircleHelp className='ml-1 h-4 w-4 cursor-default' />
									</TooltipTrigger>
									<TooltipContent side='top'>
										<p>
											Formato em hh:mm:ss (Horas, minutos,
											segundos)
										</p>
									</TooltipContent>
								</Tooltip>
							</div>
							<FormDurationInput
								control={control}
								name='duration'
							/>
						</div>
						{/* //TODO - tags */}
					</div>
					<DialogFooter
						className={cn('-mt-2 flex flex-row items-center', {
							'!justify-between': task,
							'justify-end': !task
						})}
					>
						{task && (
							<ConfirmDeletionDialog
								onCancel={(): void => {}}
								onConfirm={(): void => {}}
							>
								<Button variant='destructive'>Deletar</Button>
							</ConfirmDeletionDialog>
						)}
						<div className='flex items-start justify-center gap-x-2'>
							{task && (
								<Button variant='secondary'>Finalizar</Button>
							)}
							<Button type='submit'>Salvar</Button>
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</form>
	);
}

export default TaskDialog;
