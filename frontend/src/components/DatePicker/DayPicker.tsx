import { ptBR } from 'date-fns/locale';
import { ReactElement } from 'react';
import { Calendar } from '../ui/Calendar';

interface DayPickerProperties {
	date: Date;
	onChangeDate: (date: Date) => void;
}

function DayPicker({ date, onChangeDate }: DayPickerProperties): ReactElement {
	function onSelectDate(newDate: Date | undefined): void {
		if (newDate) {
			onChangeDate(newDate);
		}
	}

	return (
		<Calendar
			mode={'single'}
			selected={date}
			onSelect={onSelectDate}
			locale={ptBR}
			defaultMonth={date}
		/>
	);
}

export default DayPicker;
