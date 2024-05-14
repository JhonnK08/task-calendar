import { Color } from '@task-calendar/prisma';
export { Color } from '@task-calendar/prisma';

export class Tag {
	id: string;
	name: string;
	color: Color;
}
