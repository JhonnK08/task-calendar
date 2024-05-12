import { ptBR } from 'date-fns/locale';
import { ReactElement, useState } from 'react';
import { Calendar } from '../ui/Calendar';

interface DayPickerProperties {
	onChangeDate: (date: Date) => void;
}

function DayPicker({ onChangeDate }: DayPickerProperties): ReactElement {
	const [date, setDate] = useState<Date>(new Date());

	function onSelectDate(newDate: Date | undefined): void {
		if (newDate) {
			setDate(newDate);
			onChangeDate(newDate);
		}
	}

	return (
		<Calendar
			mode={'single'}
			selected={date}
			onSelect={onSelectDate}
			locale={ptBR}
		/>
	);
}

export default DayPicker;
