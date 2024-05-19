import { ReactElement } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { FormInputProperties } from 'src/components/Input/FormInput';
import { Input } from 'src/components/ui/Input';
import { cn } from 'src/utils';

function FormTitleInput<TFieldValues extends FieldValues>({
	control,
	name,
	onValueChange,
	...properties
}: FormInputProperties<TFieldValues>): ReactElement {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }): ReactElement => (
				<>
					<Input
						{...properties}
						{...field}
						onChange={event => {
							if (onValueChange) {
								onValueChange(event.target.value);
							}
							field.onChange(event);
						}}
						placeholder='Nova tarefa'
						className={cn(
							'w-[98%] rounded-none border-0 border-b pl-1 text-lg ring-offset-0 placeholder:text-lg focus-visible:border-b-primary focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent',
							{
								'border-b-red-600': !!fieldState.error
							}
						)}
						autoFocus
						maxLength={50}
					/>
				</>
			)}
		/>
	);
}

export default FormTitleInput;
