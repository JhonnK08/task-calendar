import { z } from 'zod';

const schema = z.object({
	title: z.string().min(10).max(50),
	description: z.string().min(10).max(200).optional()
});

export { schema };
