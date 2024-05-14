import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { NumberMaxTagsPolicy } from './policies/numberTags.policy';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
	controllers: [TagController],
	providers: [TagService, NumberMaxTagsPolicy, PrismaService]
})
export class TagModule {}
