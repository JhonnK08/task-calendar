import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors({
		methods: ['GET', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
		origin: [
			'http://localhost:5173',
			'https://jhonnk08.github.io/task-calendar',
			'https://jhonnk08.github.io'
		]
	});

	const config = new DocumentBuilder()
		.setTitle('Task calendar')
		.setDescription('Task calendar API documentation.')
		.setVersion('0.0.1')
		.addTag('task')
		.addTag('tag')
		.build();

	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup('docs', app, document);

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true
		})
	);

	await app.listen(3000);
	console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
