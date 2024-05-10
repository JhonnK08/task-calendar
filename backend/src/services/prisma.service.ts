import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@task-calendar/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
	async onModuleInit() {
		await this.$connect();
	}
}