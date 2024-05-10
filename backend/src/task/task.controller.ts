import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@Post()
	create(@Body() createTaskDto: CreateTaskDto) {
		return this.taskService.create(createTaskDto);
	}

	@Get()
	findAll() {
		return this.taskService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.taskService.findOne(id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
		return this.taskService.update(id, updateTaskDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.taskService.remove(id);
	}
}