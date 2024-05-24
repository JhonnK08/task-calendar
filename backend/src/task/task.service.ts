import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { tag, task } from '@task-calendar/prisma';
import { endOfDay, parseISO, startOfDay } from 'date-fns';
import { PrismaService } from 'src/services/prisma.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { FindAllTasksDto } from './dto/findAllTasks.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';

type TaskWithTags = task & { tags_tasks: { tag: tag }[] };

@Injectable()
export class TaskService {
	constructor(private readonly prismaService: PrismaService) {}

	async create(createTaskDto: CreateTaskDto): Promise<TaskWithTags> {
		console.log('createTaskDto', createTaskDto);
		try {
			const newTask = await this.prismaService.task.create({
				data: {
					dateTime: createTaskDto.dateTime,
					duration: createTaskDto.duration,
					title: createTaskDto.title,
					description: createTaskDto.description,
					finished: createTaskDto.finished,
					...(createTaskDto.tags.length > 0 && {
						tags_tasks: {
							create: createTaskDto.tags.map(tagId => ({
								tagId
							}))
						}
					})
				},
				include: {
					tags_tasks: {
						select: {
							tag: true
						}
					}
				}
			});

			return newTask;
		} catch (error) {
			console.log('#ERROR: ', error);
			throw new InternalServerErrorException(
				'There was an internal error.'
			);
		}
	}

	async findAll(queryParameters: FindAllTasksDto): Promise<TaskWithTags[]> {
		try {
			const { finalDate, startDate, title } = queryParameters;
			const tasks = await this.prismaService.task.findMany({
				where: {
					...((finalDate || startDate) && {
						dateTime: {
							...(finalDate && {
								lte: endOfDay(parseISO(finalDate))
							}),
							...(startDate && {
								gte: startOfDay(parseISO(startDate))
							})
						}
					}),
					...(title && {
						title: {
							contains: title
						}
					})
				},
				include: {
					tags_tasks: {
						select: {
							tag: true
						}
					}
				}
			});
			return tasks.map(tag => ({ ...tag }));
		} catch (error) {
			console.log('#ERROR: ', error);
			throw new InternalServerErrorException(
				'There was an internal error.'
			);
		}
	}

	async findOne(id: string): Promise<TaskWithTags | undefined> {
		try {
			const task = await this.prismaService.task.findFirst({
				where: {
					id
				},
				include: {
					tags_tasks: {
						select: {
							tag: true
						}
					}
				}
			});

			return task;
		} catch (error) {
			console.log('#ERROR: ', error);
			throw new InternalServerErrorException(
				'There was an internal error.'
			);
		}
	}

	async update(
		id: string,
		updateTaskDto: UpdateTaskDto
	): Promise<TaskWithTags> {
		try {
			console.log('updateTaskDto', updateTaskDto);
			if (updateTaskDto.tags && updateTaskDto.tags.length > 0) {
				await this.prismaService.tags_tasks.deleteMany({
					where: {
						taskId: id
					}
				});
			}
			const response = await this.prismaService.task.update({
				data: {
					dateTime: updateTaskDto.dateTime,
					description: updateTaskDto.description,
					duration: updateTaskDto.duration,
					finished: updateTaskDto.finished,
					title: updateTaskDto.title,
					...(updateTaskDto.tags &&
						updateTaskDto.tags.length > 0 && {
							tags_tasks: {
								create: updateTaskDto.tags.map(tagId => ({
									tagId
								}))
							}
						})
				},
				where: {
					id
				},
				include: {
					tags_tasks: {
						select: {
							tag: true
						}
					}
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
			const response = await this.prismaService.task.delete({
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
