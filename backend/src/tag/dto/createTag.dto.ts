import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Color } from '../entities/tag.entity';

const MAX_LENGTH_NAME = 15;

export class CreateTagDto {
	@IsNotEmpty({
		message: 'name is required.'
	})
	@IsString({
		message: 'name must be a string.'
	})
	@MaxLength(MAX_LENGTH_NAME, {
		message: `must have max ${MAX_LENGTH_NAME} characters.`
	})
	@ApiProperty({
		example: 'Tag name',
		maxLength: MAX_LENGTH_NAME,
		type: 'string'
	})
	name: string;

	@IsEnum(Color, {
		each: true,
		message: `color has to be ${Object.values(Color).join(' or ')}`
	})
	@ApiProperty({ enum: Object.values(Color) })
	color: Color;
}
