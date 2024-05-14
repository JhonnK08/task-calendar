import { addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ReactElement, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { Calendar } from '../ui/Calendar';

interface IntervalPickerProperties {
	fromDate: Date;
	onChangeDate: (date: Date) => void;
}

function IntervalPicker({
	fromDate,
	onChangeDate
}: IntervalPickerProperties): ReactElement {
	const initialRange: DateRange = {
		from: fromDate,
		to: addDays(fromDate, 6)
	};

	const [selectedDates, setSelectedDates] = useState<DateRange | undefined>(
		initialRange
	);

	function onSelectDates(newRange: DateRange | undefined): void {
		setSelectedDates(newRange);
		if (newRange?.from) {
			onChangeDate(newRange.from);
		}
	}

	return (
		<Calendar
			mode='range'
			selected={selectedDates}
			onSelect={onSelectDates}
			defaultMonth={selectedDates?.from}
			min={7}
			max={7}
			locale={ptBR}
		/>
	);
}

export default IntervalPicker;
