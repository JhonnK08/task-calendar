import {
	UseQueryResult,
	useQuery,
	useQueryClient
} from '@tanstack/react-query';
import { parseISO } from 'date-fns';
import { useCallback } from 'react';
import { fetchHolidaysByYear } from 'src/api/requests/holiday';
import { HolidayResponse } from 'src/api/types/holiday';

export function useFetchHoliday(
	date: string
): UseQueryResult<HolidayResponse[]> {
	const year = parseISO(date).getFullYear();
	const queryClient = useQueryClient();

	function filterHolidaysByDate(
		holidays: HolidayResponse[]
	): Record<string, HolidayResponse[]> {
		let response: Record<string, HolidayResponse[]> = {};

		for (const holiday of holidays) {
			response[holiday.date] = [
				...(response[holiday.date] ?? []),
				holiday
			];
		}

		return response;
	}

	const callFetchHolidaysByYear = useCallback(async () => {
		const response = await fetchHolidaysByYear(String(year));

		const holidays = response.data;

		const filteredHolidays = filterHolidaysByDate(holidays);

		for (const [key, value] of Object.entries(filteredHolidays)) {
			queryClient.setQueryData(['fetchHolidays', key], () => value);
		}
	}, [year]);

	return useQuery({
		queryKey: ['fetchHolidaysYear', year],
		queryFn: callFetchHolidaysByYear
	});
}
