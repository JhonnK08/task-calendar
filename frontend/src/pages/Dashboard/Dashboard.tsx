import { addDays } from 'date-fns';
import { ReactElement, useState } from 'react';
import ArrowDatePicker from 'src/components/DatePicker/ArrowDatePicker';
import SearchFormInput from 'src/components/Input/SearchFormInput';
import TagCombobox from 'src/components/TagCombobox/TagCombobox';
import TaskCard from 'src/components/TaskCard/TaskCard';
import ViewTabs from 'src/components/ViewTabs/ViewTabs';
import { ScrollArea } from 'src/components/ui/ScrollArea';
import { ViewType } from 'src/types/dashboard';
import { cn } from 'src/utils';
import WeekColumn from './WeekColumn';

function Dashboard(): ReactElement {
	const [view, setView] = useState<ViewType>('daily');

	function onChangeSelectedDate(newDate: Date): void {
		console.log('newDate', newDate);
	}

	return (
		<>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-row flex-wrap gap-x-2'>
					<SearchFormInput className='flex-1' />
					<TagCombobox className='' />
				</div>
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
					'flex w-[43.75rem] flex-col ': view === 'daily',
					'w-full': view === 'weekly'
				})}
			>
				{view === 'daily' ? (
					<>
						<TaskCard />
						<TaskCard />
						<TaskCard />
						<TaskCard />
						<TaskCard />
					</>
				) : (
					<div className='grid grid-cols-7 divide-x'>
						{Array.from({ length: 7 }, (_, index) =>
							addDays(new Date(), index)
						).map(item => {
							return (
								<WeekColumn key={item.getTime()} date={item} />
							);
						})}
					</div>
				)}
			</ScrollArea>
		</>
	);
}

export default Dashboard;
