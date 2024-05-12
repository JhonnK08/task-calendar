import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReactElement } from 'react';
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
	return (
		<div className={cn('flex', className)}>
			<Button variant='outline' className='rounded-r-none'>
				<ChevronLeft />
			</Button>
			<PopoverDatePicker
				mode={mode}
				onChangeSelectedDate={onChangeDate}
			/>
			<Button variant='outline' className='rounded-l-none'>
				<ChevronRight />
			</Button>
		</div>
	);
}

export default ArrowDatePicker;
