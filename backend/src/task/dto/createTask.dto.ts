import {
	IsDateString,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	Max,
	MaxLength,
	Min,
	MinLength
} from 'class-validator';

const MIN_LENGTH_STRING = 10;
const MAX_LENGTH_TITLE = 50;
const MAX_LENGTH_DESCRIPTION = 200;
const MIN_DURATION = 60; // SIXTY SECONDS
const MAX_DURATION = 24 * 60 * 60 - 1; // 24 HOURS;

export class CreateTaskDto {
	@IsNotEmpty({
		message: 'title is required.'
	})
	@IsString({
		message: 'title must be a string.'
	})
	@MaxLength(MAX_LENGTH_TITLE, {
		message: `must have max ${MAX_LENGTH_TITLE} characters.`
	})
	@MinLength(MIN_LENGTH_STRING, {
		message: `must have at least ${MIN_LENGTH_STRING} characters.`
	})
	title: string;

	@IsOptional()
	@IsString({
		message: 'description must be a string.'
	})
	@MaxLength(MAX_LENGTH_DESCRIPTION, {
		message: `must have max ${MAX_LENGTH_DESCRIPTION} characters.`
	})
	@MinLength(MIN_LENGTH_STRING, {
		message: `must have at least ${MIN_LENGTH_STRING} characters.`
	})
	description?: string;

	@IsNotEmpty({
		message: 'duration is required.'
	})
	@IsNumber(
		{
			allowInfinity: false,
			allowNaN: false,
			maxDecimalPlaces: 0
		},
		{
			message: 'duration must be a number.'
		}
	)
	@Min(MIN_DURATION, {
		message: `duration must be greater than ${MIN_DURATION} seconds.`
	})
	@Max(MAX_DURATION, {
		message: 'duration must be less than 24 hours in seconds.'
	})
	duration: number;

	@IsNotEmpty({
		message: 'dateTime is required.'
	})
	@IsDateString(
		{
			strict: true,
			strictSeparator: true
		},
		{
			message: 'dateTime must be a valid  ISO 8601 Date.'
		}
	)
	dateTime: string;
}
