import { OpenAPIObject } from '@nestjs/swagger';
import { writeFile } from 'fs';

export function saveSwaggerObject(swagger: OpenAPIObject): void {
	const jsonString = JSON.stringify(swagger, null, 2);
	writeFile('swagger.json', jsonString, err => {
		if (err) {
			console.error('Error writing file', err);
		} else {
			console.log('File has been written');
		}
	});
}
