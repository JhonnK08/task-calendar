import { format, formatISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CalendarHeart } from 'lucide-react';
import { ReactElement, useMemo } from 'react';
import LoadingCard from 'src/components/TaskCard/LoadingCard';
import TaskCard from 'src/components/TaskCard/TaskCard';
import { Button } from 'src/components/ui/Button';
import { useSearchContext } from 'src/contexts/SearchContext';
import { useFetchHolidays } from 'src/hooks/useFetchHolidays';
import { useFetchTasks } from '../hooks/useFetchTasks';
import { filterTaskBySearch } from '../utils/filter';
import HolidaysDialog from './HolidaysDialog';

interface WeekColumnProperties {
	date: Date;
}

function WeekColumn({ date }: WeekColumnProperties): ReactElement {
	const {
		data: tasks,
		isLoading,
		isFetching
	} = useFetchTasks(formatISO(date, { representation: 'date' }));

	const { searchText, filteredTags } = useSearchContext();

	const { data: holidays } = useFetchHolidays(
		formatISO(date, { representation: 'date' })
	);

	const filteredTasks = useMemo(() => {
		return tasks?.filter(task =>
			filterTaskBySearch(task, searchText, filteredTags)
		);
	}, [tasks, searchText, filteredTags]);

	return (
		<div className='relative col-span-1 flex flex-col items-center justify-start px-4'>
			<div className='sticky top-0 z-10 my-2 flex w-full items-center justify-center gap-x-2 border-b bg-background p-2'>
				<div className='flex w-full items-start justify-center gap-x-2'>
					<h2 className='text-center text-xl font-semibold'>
						{format(date, 'dd', { locale: ptBR })}
					</h2>
					<h3 className='text-lg font-medium'>
						{format(date, 'MMM', { locale: ptBR })}
					</h3>
				</div>
				<HolidaysDialog holidays={holidays} tooltip>
					<Button variant='outline' className='h-4 p-0'>
						<CalendarHeart className='h-4 w-4' />
					</Button>
				</HolidaysDialog>
			</div>
			<>
				{isLoading || isFetching ? (
					<LoadingCard />
				) : (
					filteredTasks?.map(task => (
						<TaskCard key={task.id} task={task} />
					))
				)}
			</>
		</div>
	);
}

export default WeekColumn;
