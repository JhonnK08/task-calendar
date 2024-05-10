import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';

@Module({
	imports: [TaskModule, ConfigModule.forRoot()],
	controllers: [],
	providers: []
})
export class AppModule {}
