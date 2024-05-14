import { addDays, startOfDay } from 'date-fns';
import { ReactElement } from 'react';
import WeekColumn from './WeekColumn';

interface WeekViewProperties {
	startDate: Date;
}

function WeekView({ startDate }: WeekViewProperties): ReactElement {
	return (
		<div className='grid grid-cols-7 divide-x'>
			{Array.from({ length: 7 }, (_, index) =>
				addDays(startOfDay(startDate), index)
			).map(date => {
				return <WeekColumn key={date.getTime()} date={date} />;
			})}
		</div>
	);
}

export default WeekView;
