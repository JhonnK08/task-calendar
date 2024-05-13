import { zodResolver } from '@hookform/resolvers/zod';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import SearchFormInput from 'src/components/Input/SearchFormInput';
import FormTagCombobox from 'src/components/TagCombobox/FormTagCombobox';
import { schema } from './constants/schema';
import { SearchFormData } from './types/form';

function SearchContent(): ReactElement {
	const { control, handleSubmit } = useForm<SearchFormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			searchTitle: ''
		}
	});

	function onSubmit(data: SearchFormData): void {
		console.log('onSubmit', data);
	}

	function onChangeSearchValue(value: string): void {
		console.log('searchValue', value);
	}

	function onChangeTags(tags: string[]): void {
		console.log('tags', tags);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-row flex-wrap gap-x-2'>
				<SearchFormInput
					control={control}
					name='searchTitle'
					onChangeSearchValue={onChangeSearchValue}
				/>
				<FormTagCombobox
					name='tags'
					control={control}
					onChangeValues={onChangeTags}
				/>
			</div>
		</form>
	);
}

export default SearchContent;
