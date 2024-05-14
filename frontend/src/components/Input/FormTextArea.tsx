import { ReactElement } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { cn } from 'src/utils';
import { Textarea, TextareaProps } from '../ui/Textarea';

export interface FormTextAreaProperties<TFieldValues extends FieldValues>
	extends TextareaProps {
	control: Control<TFieldValues>;
	name: Path<TFieldValues>;
	onValueChange?: (value: string) => void;
}

function FormTextArea<TFieldValues extends FieldValues>({
	control,
	className,
	name,
	onValueChange,
	...properties
}: FormTextAreaProperties<TFieldValues>): ReactElement {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }): ReactElement => (
				<>
					<Textarea
						{...properties}
						{...field}
						onChange={event => {
							if (onValueChange) {
								onValueChange(event.target.value);
							}
							field.onChange(event);
						}}
						className={cn('resize-none', className)}
					/>
					{fieldState.error && (
						<p className='text-xs font-normal text-red-600'>
							{fieldState.error.message}
						</p>
					)}
				</>
			)}
		/>
	);
}

export default FormTextArea;
