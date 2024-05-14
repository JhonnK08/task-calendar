import { zodResolver } from '@hookform/resolvers/zod';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateTask } from 'src/hooks/useCreateTask';
import { useDeleteTask } from 'src/pages/Dashboard/hooks/useDeleteTask';
import { useUpdateTask } from 'src/pages/Dashboard/hooks/useUpdateTask';
import { Task } from 'src/types/entities';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '../ui/Dialog';
import TaskDialogContent from './TaskDialogContent';
import TaskDialogFooter from './TaskDialogFooter';
import FormTitleInput from './components/FormTitleInput';
import { schema } from './constants/schema';

interface TaskDialogProperties {
	children: ReactElement;
	task?: Task;
}

function TaskDialog({ task, children }: TaskDialogProperties): ReactElement {
	const { control, handleSubmit, reset } = useForm<TaskFormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			title: '',
			duration: '000000'
		}
	});
	const { mutate: createTask } = useCreateTask();
	const { mutate: updateTask } = useUpdateTask();
	const { mutate: deleteTask } = useDeleteTask();

	function onConfirmDeletion(): void {
		if (task) {
			deleteTask(task.id);
		}
	}

	function onClickFinishButton(): void {
		if (task) {
			updateTask({
				payload: {
					finished: true
				},
				taskId: task.id
			});
		}
	}

	function onSubmit(data: TaskFormData): void {
		console.log('data', data);
		if (task) {
			updateTask({
				taskId: task.id,
				payload: {
					description: data.description,
					title: data.title,
					duration: Number(data.duration)
				}
			});
		} else {
			createTask(
				{
					description: data.description,
					dateTime: new Date().toISOString(),
					duration: Number(data.duration),
					title: data.title
				},
				{
					onSuccess: () => {
						reset();
					}
				}
			);
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Dialog>
				<DialogTrigger asChild disabled={!!task?.finished}>
					{children}
				</DialogTrigger>
				<DialogContent className='p-4 sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>
							<FormTitleInput control={control} name='title' />
						</DialogTitle>
					</DialogHeader>
					<TaskDialogContent control={control} />
					<TaskDialogFooter
						task={task}
						onClickFinish={onClickFinishButton}
						onConfirmDeletion={onConfirmDeletion}
					/>
				</DialogContent>
			</Dialog>
		</form>
	);
}

export default TaskDialog;
