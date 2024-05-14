import { ReactElement, useMemo, useState } from 'react';
import ArrowDatePicker from 'src/components/DatePicker/ArrowDatePicker';
import ViewTabs from 'src/components/ViewTabs/ViewTabs';
import { ScrollArea } from 'src/components/ui/ScrollArea';
import { useFetchHoliday } from 'src/hooks/useFetchHoliday';
import { ViewType } from 'src/types/dashboard';
import { cn } from 'src/utils';
import SearchContent from './SearchContent/SearchContent';
import DayView from './components/DayView';
import WeekView from './components/WeekView';

function Dashboard(): ReactElement {
	const [view, setView] = useState<ViewType>('daily');
	const [startDate, setStartDate] = useState(new Date());

	const year = useMemo(() => startDate.getFullYear(), [startDate]);
	useFetchHoliday(String(year));

	function onChangeSelectedDate(newDate: Date): void {
		console.log('newDate', newDate);
		setStartDate(newDate);
	}

	return (
		<>
			<div className='flex flex-col gap-4'>
				<SearchContent />
				<div className='grid grid-cols-8 gap-x-2'>
					<ArrowDatePicker
						className='col-span-6'
						mode={view === 'daily' ? 'day' : 'interval'}
						onChangeDate={onChangeSelectedDate}
					/>
					<ViewTabs
						className='col-span-3 col-start-7'
						onChangeTabValue={value => {
							console.log('newValue', value);
							setView(value);
						}}
					/>
				</div>
			</div>
			<ScrollArea
				className={cn('p-3 pt-0', {
					'flex w-[43.75rem] flex-col': view === 'daily',
					'w-full': view === 'weekly'
				})}
			>
				{view === 'daily' ? (
					<DayView startDate={startDate} />
				) : (
					<WeekView startDate={startDate} />
				)}
			</ScrollArea>
		</>
	);
}

export default Dashboard;
