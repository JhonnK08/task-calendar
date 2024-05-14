import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TagModule } from './tag/tag.module';
import { TaskModule } from './task/task.module';

@Module({
	imports: [TaskModule, TagModule, ConfigModule.forRoot()],
	controllers: [],
	providers: []
})
export class AppModule {}
