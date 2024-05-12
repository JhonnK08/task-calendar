import { Search } from 'lucide-react';
import { ReactElement } from 'react';
import { cn } from 'src/utils';
import { Input } from '../ui/Input';

interface SearchFormInputProperties {
	className?: string;
}

function SearchFormInput({
	className
}: SearchFormInputProperties): ReactElement {
	return (
		<div className={cn('relative w-full', className)}>
			<Search className='absolute left-2 top-3 h-4 w-4' />
			<Input placeholder='Search' className='pl-8' />
		</div>
	);
}

export default SearchFormInput;
