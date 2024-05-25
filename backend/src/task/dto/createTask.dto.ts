import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
	IsArray,
	IsBoolean,
	IsDateString,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	Max,
	MaxLength,
	Min,
	MinLength,
	Validate
} from 'class-validator';
import { IsAfterNowConstraint } from 'src/utils/validation/dateValidation';

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
	@ApiProperty({
		example: 'Title task',
		minLength: MIN_LENGTH_STRING,
		maxLength: MAX_LENGTH_TITLE,
		type: 'string'
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
	@ApiPropertyOptional({
		example: 'Description of the task',
		minLength: MIN_LENGTH_STRING,
		maxLength: MAX_LENGTH_DESCRIPTION,
		type: 'string'
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
	@ApiProperty({
		example: 300,
		minimum: MIN_DURATION,
		maximum: MAX_DURATION,
		description: 'must be in seconds.',
		type: 'number'
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
			message: 'dateTime must be a valid ISO 8601 Date.'
		}
	)
	@Validate(IsAfterNowConstraint)
	@ApiProperty({
		example: '2024-05-10T15:30:00',
		description: 'must be a valid ISO 8601 date, in the future.',
		type: 'string'
	})
	dateTime: string;

	@IsOptional()
	@IsBoolean({
		message: 'finished must be a boolean.'
	})
	@ApiPropertyOptional({
		type: 'boolean',
		example: false
	})
	finished?: boolean;

	@IsOptional()
	@IsArray({
		message: 'tags must be a string array.'
	})
	@ApiPropertyOptional({
		type: 'string',
		example: ['1', '2']
	})
	tags?: string[];
}
