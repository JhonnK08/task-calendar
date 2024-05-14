import { useIsMutating } from '@tanstack/react-query';
import { ReactElement } from 'react';
import { Task } from 'src/types/entities';
import { cn } from 'src/utils';
import ConfirmDeletionDialog from '../ConfirmDeletionDialog/ConfirmDeletionDialog';
import { Button } from '../ui/Button';
import { DialogFooter } from '../ui/Dialog';

interface TaskDialogFooterProperties {
	onConfirmDeletion: () => void;
	onClickFinish: () => void;
	task?: Task;
}

function TaskDialogFooter({
	onClickFinish,
	onConfirmDeletion,
	task
}: TaskDialogFooterProperties): ReactElement {
	const isMutating = useIsMutating();

	return (
		<DialogFooter
			className={cn('-mt-2 flex flex-row items-center', {
				'!justify-between': task,
				'justify-end': !task
			})}
		>
			{task && (
				<ConfirmDeletionDialog
					onCancel={(): void => {}}
					onConfirm={onConfirmDeletion}
				>
					<Button variant='destructive' disabled={!!isMutating}>
						Deletar
					</Button>
				</ConfirmDeletionDialog>
			)}
			<div className='flex items-start justify-center gap-x-2'>
				{task && !task.finished && (
					<Button
						variant='secondary'
						onClick={onClickFinish}
						disabled={!!isMutating}
					>
						Finalizar
					</Button>
				)}
				<Button type='submit' disabled={!!isMutating}>
					Salvar
				</Button>
			</div>
		</DialogFooter>
	);
}

export default TaskDialogFooter;
