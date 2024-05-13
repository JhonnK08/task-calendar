import {
	IsDateString,
	IsNotEmpty,
	IsOptional,
	IsString
} from 'class-validator';

export class FindAllTasksDto {
	@IsOptional()
	@IsString({
		message: 'title must be a string'
	})
	title?: string;

	@IsOptional()
	@IsDateString(
		{
			strict: true
		},
		{
			message: 'startDate: invalid date string'
		}
	)
	@IsNotEmpty({
		message: 'startDate: required'
	})
	startDate?: string;

	@IsOptional()
	@IsDateString(
		{
			strict: true
		},
		{
			message: 'finalDate: invalid date string'
		}
	)
	@IsNotEmpty({
		message: 'finalDate: required'
	})
	finalDate?: string;
}
