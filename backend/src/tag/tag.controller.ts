import {
	Body,
	Controller,
	Delete,
	Get,
	InternalServerErrorException,
	Param,
	ParseUUIDPipe,
	Patch,
	Post
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateTagDto } from './dto/createTag.dto';
import { UpdateTagDto } from './dto/updateTag.dto';
import { Tag } from './entities/tag.entity';
import { TagService } from './tag.service';

@ApiTags('tag')
@Controller('tag')
export class TagController {
	constructor(private readonly tagService: TagService) {}

	@Post()
	@ApiBody({ type: CreateTagDto })
	async create(@Body() createTagDto: CreateTagDto): Promise<Tag> {
		const newTag = await this.tagService.create(createTagDto);

		return {
			id: newTag.id,
			color: newTag.color,
			name: newTag.name
		};
	}

	@Get()
	async findAll(): Promise<Tag[]> {
		const tags = await this.tagService.findAll();

		return tags.map(tag => ({
			id: tag.id,
			color: tag.color,
			name: tag.name
		}));
	}

	@Get(':id')
	async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Tag> {
		const tag = await this.tagService.findOne(id);

		return {
			id: tag.id,
			color: tag.color,
			name: tag.name
		};
	}

	@Patch(':id')
	@ApiBody({ type: UpdateTagDto })
	async update(
		@Param('id', ParseUUIDPipe) id: string,
		@Body() updateTagDto: UpdateTagDto
	): Promise<Tag> {
		const updatedTag = await this.tagService.update(id, updateTagDto);

		return {
			id: updatedTag.id,
			color: updatedTag.color,
			name: updatedTag.name
		};
	}

	@Delete(':id')
	async remove(@Param('id', ParseUUIDPipe) id: string): Promise<boolean> {
		const response = await this.tagService.remove(id);

		if (!response) {
			throw new InternalServerErrorException(
				'There was an error on delete task.'
			);
		}

		return response;
	}
}
