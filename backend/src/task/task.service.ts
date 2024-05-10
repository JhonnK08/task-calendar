import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';

@Injectable()
export class TaskService {
	create(createTaskDto: CreateTaskDto) {
		console.log('createTaskDto', createTaskDto);
		return 'This action adds a new task';
	}

	findAll() {
		return `This action returns all task`;
	}

	findOne(id: string) {
		return `This action returns a #${id} task`;
	}

	update(id: string, updateTaskDto: UpdateTaskDto) {
		console.log('updateTaskDto', updateTaskDto);
		return `This action updates a #${id} task`;
	}

	remove(id: string) {
		return `This action removes a #${id} task`;
	}
}
