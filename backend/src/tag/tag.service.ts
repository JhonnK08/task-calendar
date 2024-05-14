import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { tag } from '@task-calendar/prisma';
import { PrismaService } from 'src/services/prisma.service';
import { CreateTagDto } from './dto/createTag.dto';
import { UpdateTagDto } from './dto/updateTag.dto';
import { NumberMaxTagsPolicy } from './policies/numberTags.policy';

@Injectable()
export class TagService {
	constructor(
		private readonly numberMaxPolicy: NumberMaxTagsPolicy,
		private readonly prismaService: PrismaService
	) {}

	async create(createTagDto: CreateTagDto): Promise<tag> {
		console.log('createTagDto', createTagDto);
		try {
			const tags = await this.findAll();

			this.numberMaxPolicy.checkMaxTagsLimit(tags.length);

			const newTag = await this.prismaService.tag.create({
				data: {
					color: createTagDto.color,
					name: createTagDto.name
				}
			});

			return newTag;
		} catch (error) {
			console.log('#ERROR: ', error);
			throw new InternalServerErrorException(
				'There was an internal error.'
			);
		}
	}

	async findAll(): Promise<tag[]> {
		try {
			const tags = await this.prismaService.tag.findMany();

			return tags;
		} catch (error) {
			console.log('#ERROR: ', error);
			throw new InternalServerErrorException(
				'There was an internal error.'
			);
		}
	}

	async findOne(id: string): Promise<tag | undefined> {
		try {
			const tag = await this.prismaService.tag.findFirst({
				where: {
					id
				}
			});

			return tag;
		} catch (error) {
			console.log('#ERROR: ', error);
			throw new InternalServerErrorException(
				'There was an internal error.'
			);
		}
	}

	async update(id: string, updateTagDto: UpdateTagDto): Promise<tag> {
		console.log('updateTagDto', updateTagDto);
		try {
			const response = await this.prismaService.tag.update({
				data: {
					color: updateTagDto.color,
					name: updateTagDto.name
				},
				where: {
					id
				}
			});

			return response;
		} catch (error) {
			console.log('#ERROR: ', error);
			throw new InternalServerErrorException(
				'There was an internal error.'
			);
		}
	}

	async remove(id: string): Promise<boolean> {
		try {
			const response = await this.prismaService.tag.delete({
				where: {
					id
				}
			});

			return !!response;
		} catch (error) {
			console.log('#ERROR: ', error);
			throw new InternalServerErrorException(
				'There was an internal error.'
			);
		}
	}
}
