import { zodResolver } from '@hookform/resolvers/zod';
import { ReactElement, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import SearchFormInput from 'src/components/Input/SearchFormInput';
import FormTagCombobox from 'src/components/TagCombobox/FormTagCombobox';
import { useSearchContext } from 'src/contexts/SearchContext';
import useDebounce from 'src/hooks/useDebounce';
import { schema } from './constants/schema';
import { SearchFormData } from './types/form';

function SearchContent(): ReactElement {
	const { setSearchText, setFilteredTags } = useSearchContext();
	const { control } = useForm<SearchFormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			searchTitle: ''
		}
	});

	const searchTitleWatch = useWatch({
		control,
		name: 'searchTitle'
	});

	const searchTitleDebounced = useDebounce(searchTitleWatch, 500);

	function onChangeTags(tags: string[]): void {
		setFilteredTags(tags);
	}

	useEffect(() => {
		setSearchText(searchTitleDebounced);
	}, [searchTitleDebounced]);

	return (
		<form>
			<div className='flex flex-row flex-wrap gap-x-2'>
				<SearchFormInput
					control={control}
					name='searchTitle'
					onChangeSearchValue={() => {}}
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
