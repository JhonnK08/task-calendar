import {
	Body,
	Controller,
	Delete,
	Get,
	InternalServerErrorException,
	Param,
	ParseUUIDPipe,
	Patch,
	Post,
	Query
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/createTask.dto';
import { FindAllTasksDto } from './dto/findAllTasks.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { Task } from './entities/task.entity';
import { TaskService } from './task.service';

@ApiTags('task')
@Controller('task')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@Post()
	@ApiBody({ type: CreateTaskDto })
	async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
		const task = await this.taskService.create(createTaskDto);

		return {
			id: task.id,
			title: task.title,
			description: task.description,
			dateTime: task.dateTime.toISOString(),
			duration: task.duration,
			finished: task.finished
		};
	}

	@Get()
	async findAll(@Query() queryParameters: FindAllTasksDto): Promise<Task[]> {
		const tasks = await this.taskService.findAll(queryParameters);

		return tasks.map(task => ({
			id: task.id,
			title: task.title,
			description: task.description,
			dateTime: task.dateTime.toISOString(),
			duration: task.duration,
			finished: task.finished
		}));
	}

	@Get(':id')
	async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Task> {
		const task = await this.taskService.findOne(id);

		return {
			id: task.id,
			title: task.title,
			description: task.description,
			dateTime: task.dateTime.toISOString(),
			duration: task.duration,
			finished: task.finished
		};
	}

	@Patch(':id')
	@ApiBody({ type: UpdateTaskDto })
	async update(
		@Param('id', ParseUUIDPipe) id: string,
		@Body() updateTaskDto: UpdateTaskDto
	): Promise<Task> {
		const updatedTask = await this.taskService.update(id, updateTaskDto);

		return {
			id: updatedTask.id,
			title: updatedTask.title,
			description: updatedTask.description,
			dateTime: updatedTask.dateTime.toISOString(),
			duration: updatedTask.duration,
			finished: updatedTask.finished
		};
	}

	@Delete(':id')
	async remove(@Param('id', ParseUUIDPipe) id: string): Promise<boolean> {
		const response = await this.taskService.remove(id);

		if (!response) {
			throw new InternalServerErrorException(
				'There was an error on delete task.'
			);
		}

		return response;
	}
}
