import { addDays, subDays } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReactElement, useState } from 'react';
import { cn } from 'src/utils';
import { Button } from '../ui/Button';
import { PopoverDatePicker } from './PopoverDatePicker';

interface ArrowDatePickerProperties {
	className?: string;
	mode: 'day' | 'interval';
	onChangeDate: (date: Date) => void;
}

function ArrowDatePicker({
	className,
	mode,
	onChangeDate
}: ArrowDatePickerProperties): ReactElement {
	const [date, setDate] = useState(new Date());

	function onChangeSelectedDate(newDate: Date): void {
		setDate(newDate);
		onChangeDate(newDate);
	}

	function onPreviousArrowClick(): void {
		const newDate = subDays(date, 1);
		setDate(newDate);
		onChangeDate(newDate);
	}

	function onForwardArrowClick(): void {
		const newDate = addDays(date, 1);
		setDate(newDate);
		onChangeDate(newDate);
	}

	return (
		<div className={cn('flex', className)}>
			<Button
				variant='outline'
				className='rounded-r-none'
				onClick={onPreviousArrowClick}
			>
				<ChevronLeft />
			</Button>
			<PopoverDatePicker
				date={date}
				mode={mode}
				onChangeSelectedDate={onChangeSelectedDate}
			/>
			<Button
				variant='outline'
				className='rounded-l-none'
				onClick={onForwardArrowClick}
			>
				<ChevronRight />
			</Button>
		</div>
	);
}

export default ArrowDatePicker;
