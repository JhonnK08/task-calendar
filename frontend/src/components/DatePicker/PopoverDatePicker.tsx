import { addDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ReactElement } from 'react';
import { cn } from 'src/utils';
import { Button } from '../ui/Button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover';
import DayPicker from './DayPicker';
import IntervalPicker from './IntervalPicker';

interface PopoverDatePickerProperties {
	date: Date;
	mode: 'day' | 'interval';
	onChangeSelectedDate: (date: Date) => void;
}

export function PopoverDatePicker({
	date,
	mode,
	onChangeSelectedDate
}: PopoverDatePickerProperties): ReactElement {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'min-w-[280px] flex-1 justify-center rounded-none text-center font-normal'
					)}
				>
					{mode === 'day'
						? format(date, 'PPP', { locale: ptBR })
						: ` ${format(date, 'LLL dd, y', {
								locale: ptBR
							})} - ${format(addDays(date, 6), 'LLL dd, y', {
								locale: ptBR
							})}`}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0'>
				{mode === 'day' ? (
					<DayPicker onChangeDate={onChangeSelectedDate} />
				) : (
					<IntervalPicker onChangeDate={onChangeSelectedDate} />
				)}
			</PopoverContent>
		</Popover>
	);
}
