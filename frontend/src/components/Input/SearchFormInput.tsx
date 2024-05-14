import { Search } from 'lucide-react';
import { ReactElement } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';
import { cn } from 'src/utils';
import FormInput from './FormInput';

interface SearchFormInputProperties<TFieldValues extends FieldValues> {
	name: Path<TFieldValues>;
	control: Control<TFieldValues>;
	className?: string;
	onChangeSearchValue: (value: string) => void;
}

function SearchFormInput<TFieldValues extends FieldValues>({
	className,
	control,
	name,
	onChangeSearchValue
}: SearchFormInputProperties<TFieldValues>): ReactElement {
	return (
		<div className={cn('relative w-full flex-1', className)}>
			<Search className='absolute left-2 top-3 h-4 w-4' />
			<FormInput
				placeholder='Search'
				className='pl-8'
				control={control}
				name={name}
				onValueChange={onChangeSearchValue}
			/>
		</div>
	);
}

export default SearchFormInput;
