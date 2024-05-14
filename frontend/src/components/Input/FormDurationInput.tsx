import { ReactElement } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import DurationInput from './DurationInput';
import { FormInputProperties } from './FormInput';

function FormDurationInput<TFieldValues extends FieldValues>({
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
					<DurationInput
						{...properties}
						name={field.name}
						onChange={event => {
							if (onValueChange) {
								onValueChange(event.target.value);
							}
							field.onChange(event.target.value);
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

export default FormDurationInput;
