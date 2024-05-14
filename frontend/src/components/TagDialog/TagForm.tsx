import { zodResolver } from '@hookform/resolvers/zod';
import { useIsMutating } from '@tanstack/react-query';
import { ReactElement, useEffect, useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Color, Tag } from 'src/api/types/tag';
import { useCreateTag } from 'src/hooks/useCreateTag';
import { useDeleteTag } from 'src/hooks/useDeleteTag';
import { useUpdateTag } from 'src/hooks/useUpdateTag';
import { cn } from 'src/utils';
import { getTagColor } from 'src/utils/tagColor';
import ConfirmDeletionDialog from '../ConfirmDeletionDialog/ConfirmDeletionDialog';
import FormInput from '../Input/FormInput';
import { Button } from '../ui/Button';
import { Label } from '../ui/Label';
import { ToggleGroup, ToggleGroupItem } from '../ui/ToogleGroup';
import { schema } from './constants/schema';
import { TagFormData } from './types/form';

interface TagFormProperties {
	tag?: Tag;
}

function TagForm({ tag }: TagFormProperties): ReactElement {
	const { control, setValue, reset, handleSubmit, getValues } =
		useForm<TagFormData>({
			defaultValues: {
				name: ''
			},
			resolver: zodResolver(schema)
		});
	const isFirstRenderReference = useRef(true);

	const colorWatch = useWatch({
		control,
		name: 'color'
	});

	const { mutate: createTag } = useCreateTag();
	const { mutate: deleteTag } = useDeleteTag();
	const { mutate: updateTag } = useUpdateTag();

	const isMutating = useIsMutating();

	useEffect(() => {
		if (tag && isFirstRenderReference.current) {
			isFirstRenderReference.current = false;

			reset({
				color: tag.color,
				name: tag.name
			});
		}
	}, [tag]);

	function onSubmit(data: TagFormData): void {
		if (tag) {
			updateTag({
				tagId: tag.id,
				payload: {
					color: data.color,
					name: data.name
				}
			});
		} else {
			createTag(
				{
					color: data.color,
					name: data.name
				},
				{
					onSuccess: () => {
						reset();
					}
				}
			);
		}
	}

	function onConfirmDeletion(): void {
		if (tag) {
			deleteTag(tag.id);
		}
	}

	return (
		<form className='grid gap-y-4' onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-col items-start gap-4'>
				<Label htmlFor='name'>Nome</Label>
				<FormInput name='name' control={control} maxLength={15} />
			</div>
			<div className='flex flex-col items-start gap-4'>
				<Label htmlFor='color'>Selecione a cor</Label>
				<div>
					<ToggleGroup
						type='single'
						defaultValue={tag?.color}
						disabled={!!isMutating}
						className='grid grid-cols-5'
					>
						{Object.values(Color).map(value => (
							<ToggleGroupItem
								onClick={() =>
									setValue(
										'color',
										getValues('color') !== value
											? value
											: ('' as Color)
									)
								}
								value={value}
								className={cn(
									`col-span-1 h-5 !w-14 gap-4 rounded-lg checked:!border-white hover:opacity-60 data-[state=on]:border-2 data-[state=on]:border-primary dark:data-[state=on]:border-white`
								)}
								style={{
									backgroundColor: getTagColor(value)
								}}
								key={`button-${value.toLocaleLowerCase()}`}
								variant='outline'
							/>
						))}
					</ToggleGroup>
				</div>
			</div>
			<div className='flex justify-between'>
				{tag && (
					<ConfirmDeletionDialog
						onCancel={(): void => {}}
						onConfirm={onConfirmDeletion}
					>
						<Button variant='destructive' disabled={!!isMutating}>
							Deletar
						</Button>
					</ConfirmDeletionDialog>
				)}

				<Button
					type='submit'
					disabled={!colorWatch || !!isMutating}
					className={cn({ 'ml-auto': !tag })}
				>
					Salvar
				</Button>
			</div>
		</form>
	);
}

export default TagForm;
