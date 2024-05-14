import { z } from 'zod';

const schema = z.object({
	searchTitle: z.string(),
	tags: z.array(z.string())
});

export { schema };
