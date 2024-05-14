import { formatISO } from 'date-fns';
import { ReactElement } from 'react';
import LoadingCard from 'src/components/TaskCard/LoadingCard';
import TaskCard from 'src/components/TaskCard/TaskCard';
import { useFetchTasks } from '../hooks/useFetchTasks';

interface DayViewProperties {
	startDate: Date;
}

function DayView({ startDate }: DayViewProperties): ReactElement {
	const {
		data: tasks,
		isLoading,
		isFetching
	} = useFetchTasks(formatISO(startDate, { representation: 'date' }));

	if (isLoading || isFetching) {
		return <LoadingCard />;
	}

	return <>{tasks?.map(task => <TaskCard key={task.id} task={task} />)}</>;
}

export default DayView;
