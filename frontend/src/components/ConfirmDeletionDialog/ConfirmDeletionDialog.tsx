import { ReactElement } from 'react';
import { Button } from '../ui/Button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogTrigger
} from '../ui/Dialog';

interface ConfirmDeletionDialogProperties {
	children: ReactElement;
	onConfirm: () => void;
	onCancel: () => void;
}

function ConfirmDeletionDialog({
	children,
	onCancel,
	onConfirm
}: ConfirmDeletionDialogProperties): ReactElement {
	return (
		<Dialog modal>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className='bg-secondary-foreground p-4 sm:max-w-[25rem]'>
				<h4 className='text-center text-lg font-semibold text-secondary'>
					Você tem certeza que gostaria de deletar?
				</h4>
				<DialogFooter className='-mt-2 flex flex-row items-center !justify-center'>
					<DialogClose asChild>
						<Button variant='secondary' onClick={onCancel}>
							Cancelar
						</Button>
					</DialogClose>
					<Button variant='destructive' onClick={onConfirm}>
						Deletar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

export default ConfirmDeletionDialog;
