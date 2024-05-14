import { ReactElement } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import TagCombobox, { TagComboboxProperties } from './TagCombobox';

interface FormTagComboboxProperties<TFieldValues extends FieldValues>
	extends Omit<TagComboboxProperties, 'values'> {
	control: Control<TFieldValues>;
	name: Path<TFieldValues>;
	onValueChange?: (values: string[]) => void;
}

function FormTagCombobox<TFieldValues extends FieldValues>({
	control,
	name,
	onValueChange,
	...properties
}: FormTagComboboxProperties<TFieldValues>): ReactElement {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }): ReactElement => (
				<>
					<TagCombobox
						{...properties}
						values={field.value ?? []}
						onChangeValues={(newValues: string[]) => {
							if (onValueChange) {
								onValueChange(newValues);
							}
							field.onChange(newValues);
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

export default FormTagCombobox;
