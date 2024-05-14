import axios, { AxiosResponse } from 'axios';
import { HolidayResponse } from '../types/holiday';

export async function fetchHolidaysByYear(
	year: string
): Promise<AxiosResponse<HolidayResponse[]>> {
	return axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/BR`);
}
