import { ReactElement, ReactNode } from 'react';
import { HolidayResponse } from 'src/api/types/holiday';
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from 'src/components/ui/Popover';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from 'src/components/ui/Tooltip';

interface HolidaysProperties {
	children: ReactNode;
	holidays?: HolidayResponse[];
	tooltip?: boolean;
}

function HolidaysDialog({
	children,
	holidays,
	tooltip
}: HolidaysProperties): ReactElement | null {
	if (!holidays || holidays.length === 0) {
		return null;
	}

	return (
		<Popover>
			{tooltip ? (
				<Tooltip>
					<TooltipTrigger>
						<PopoverTrigger asChild>{children}</PopoverTrigger>
					</TooltipTrigger>
					<TooltipContent side='bottom'>
						<p>Feriados</p>
					</TooltipContent>
				</Tooltip>
			) : (
				<PopoverTrigger asChild>{children}</PopoverTrigger>
			)}
			<PopoverContent>
				<div className='flex flex-col items-start justify-start p-4 py-2'>
					<ul className='list-disc'>
						{holidays.map(holiday => (
							<li className='text-sm'>{holiday.localName}</li>
						))}
					</ul>
				</div>
			</PopoverContent>
		</Popover>
	);
}

export default HolidaysDialog;
