import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { HolidayResponse } from 'src/api/types/holiday';
import { useFetchHoliday } from './useFetchHoliday';

export function useFetchHolidays(
	date: string
): UseQueryResult<HolidayResponse[]> {
	useFetchHoliday(date);

	return useQuery({
		queryKey: ['fetchHolidays', date]
	});
}
