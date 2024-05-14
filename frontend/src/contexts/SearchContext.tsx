import {
	ReactElement,
	ReactNode,
	createContext,
	useContext,
	useMemo,
	useState
} from 'react';

interface SearchContext {
	searchText: string;
	setSearchText: (searchText: string) => void;
	filteredTags: string[];
	setFilteredTags: (tags: string[]) => void;
}

export const SearchContextContainer = createContext<SearchContext | undefined>(
	undefined
);

function SearchProvider({ children }: { children: ReactNode }): ReactElement {
	const [searchText, setSearchText] = useState('');
	const [filteredTags, setFilteredTags] = useState<string[]>([]);

	const values = useMemo(
		() => ({
			searchText,
			setSearchText,
			filteredTags,
			setFilteredTags
		}),
		[searchText, filteredTags, setFilteredTags, setSearchText]
	);

	return (
		<SearchContextContainer.Provider value={values}>
			{children}
		</SearchContextContainer.Provider>
	);
}

export function useSearchContext(): SearchContext {
	const value = useContext(SearchContextContainer);

	if (!value) {
		throw new Error('Fail to create SearchContext');
	}

	return value;
}

export default SearchProvider;
