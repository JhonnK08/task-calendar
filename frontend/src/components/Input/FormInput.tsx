import { ReactElement } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Input, InputProps } from '../ui/Input';

export interface FormInputProperties<TFieldValues extends FieldValues>
	extends InputProps {
	control: Control<TFieldValues>;
	name: Path<TFieldValues>;
	onValueChange?: (value: string) => void;
}

function FormInput<TFieldValues extends FieldValues>({
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

export default FormInput;
