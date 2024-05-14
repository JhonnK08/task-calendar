import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { parseISO } from 'date-fns';
import { HolidayResponse } from 'src/api/types/holiday';
import { useFetchHoliday } from './useFetchHoliday';

export function useFetchHolidays(
	date: string
): UseQueryResult<HolidayResponse[]> {
	useFetchHoliday(String(parseISO(date).getFullYear()));

	return useQuery({
		queryKey: ['fetchHolidays', date]
	});
}
