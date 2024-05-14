export enum HolidayTypes {
	Public = 'Public',
	Bank = 'Bank',
	School = 'School',
	Authorities = 'Authorities',
	Optional = 'Optional',
	Observance = 'Observance'
}

export interface HolidayResponse {
	date: string;
	localName: string | null;
	name: string | null;
	countryCode: string;
	fixed: boolean;
	global: boolean;
	counties: string[]; //federal states;
	launchYear: number;
	types: HolidayTypes;
}
