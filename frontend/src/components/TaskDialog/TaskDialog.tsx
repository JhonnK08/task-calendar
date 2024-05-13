import { CircleHelp } from 'lucide-react';
import { ReactElement } from 'react';
import { Task } from 'src/types/entities';
import { cn } from 'src/utils';
import ConfirmDeletionDialog from '../ConfirmDeletionDialog/ConfirmDeletionDialog';
import DurationInput from '../Input/DurationInput';
import { Button } from '../ui/Button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '../ui/Dialog';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Textarea } from '../ui/Textarea';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/Tooltip';

interface TaskDialogProperties {
	children: ReactElement;
	task?: Task;
}

function TaskDialog({ task, children }: TaskDialogProperties): ReactElement {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className='p-4 sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>
						<Input
							placeholder='Nova tarefa'
							className='w-[98%] rounded-none border-0 border-b pl-1 text-lg ring-offset-0 placeholder:text-lg focus-visible:border-b-primary focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent'
							autoFocus
							maxLength={50}
						/>
					</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 pb-2 pt-4'>
					<div className='flex flex-col items-start gap-4'>
						<Label htmlFor='description' className='text-right'>
							Descrição
						</Label>
						<Textarea
							id='description'
							name='description'
							maxLength={200}
							className='resize-none'
						/>
					</div>
					<div className='flex flex-col items-start gap-4'>
						<div className='flex items-center'>
							<Label htmlFor='duration' className='text-right'>
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
						<DurationInput name='duration' id='duration' />
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
						{task && <Button variant='secondary'>Finalizar</Button>}
						<Button type='submit'>Salvar</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

export default TaskDialog;
