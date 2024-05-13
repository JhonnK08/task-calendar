import { ReactElement } from 'react';
import { NumberFormatValues, PatternFormat } from 'react-number-format';
import { Input, InputProps } from '../ui/Input';

const MAX_HOURS = 23;
const MAX_MINUTES = 59;
const MAX_SECONDS = 59;

interface DurationInputProperties extends InputProps {}

function DurationInput(properties: DurationInputProperties): ReactElement {
	return (
		<PatternFormat
			{...properties}
			defaultValue={'000000'}
			value={properties.value as string | number | null | undefined}
			type='text'
			customInput={Input}
			format='##:##:##'
			isAllowed={(values: NumberFormatValues): boolean => {
				const [hours, minutes, seconds] = values.formattedValue
					.replace(/'_'/g, '0')
					.split(':');

				return (
					Number(hours) <= MAX_HOURS &&
					Number(minutes) <= MAX_MINUTES &&
					Number(seconds) <= MAX_SECONDS
				);
			}}
			valueIsNumericString
		/>
	);
}

export default DurationInput;
