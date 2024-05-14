import {
	UseQueryResult,
	useQuery,
	useQueryClient
} from '@tanstack/react-query';
import { useCallback } from 'react';
import { fetchHolidaysByYear } from 'src/api/requests/holiday';
import { HolidayResponse } from 'src/api/types/holiday';

export function useFetchHoliday(
	year: string
): UseQueryResult<HolidayResponse[]> {
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

		console.log('filteredHolidays', filteredHolidays);

		for (const [key, value] of Object.entries(filteredHolidays)) {
			queryClient.setQueryData(['fetchHolidays', key], () => value);
		}

		return Object.values(filteredHolidays).flat();
	}, [year]);

	return useQuery({
		queryKey: ['fetchHolidaysYear', year],
		queryFn: callFetchHolidaysByYear
	});
}
