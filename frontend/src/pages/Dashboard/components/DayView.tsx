import { formatISO } from 'date-fns';
import { ReactElement } from 'react';
import LoadingCard from 'src/components/TaskCard/LoadingCard';
import TaskCard from 'src/components/TaskCard/TaskCard';
import { Button } from 'src/components/ui/Button';
import { useFetchHolidays } from 'src/hooks/useFetchHolidays';
import { useFetchTasks } from '../hooks/useFetchTasks';
import HolidaysDialog from './HolidaysDialog';

interface DayViewProperties {
	startDate: Date;
}

function DayView({ startDate }: DayViewProperties): ReactElement {
	const {
		data: tasks,
		isLoading,
		isFetching
	} = useFetchTasks(formatISO(startDate, { representation: 'date' }));

	const { data: holidays } = useFetchHolidays(
		formatISO(startDate, { representation: 'date' })
	);

	function renderTasks(): ReactElement {
		if (isLoading || isFetching) {
			return <LoadingCard />;
		}

		if (tasks?.length === 0) {
			return (
				<div className='flex h-44 items-center justify-center text-center text-xl text-secondary-foreground'>
					<h2>Nenhuma task encontrada.</h2>
				</div>
			);
		}

		return (
			<>{tasks?.map(task => <TaskCard key={task.id} task={task} />)}</>
		);
	}

	return (
		<>
			<HolidaysDialog holidays={holidays}>
				<div className='sticky left-auto right-auto top-0 flex w-full items-center '>
					<Button className='mx-auto' variant={'secondary'}>
						Feriados
					</Button>
				</div>
			</HolidaysDialog>
			{renderTasks()}
		</>
	);
}

export default DayView;
