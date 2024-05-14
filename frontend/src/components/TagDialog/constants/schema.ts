import { Color } from 'src/api/types/tag';
import { z } from 'zod';

const schema = z.object({
	name: z.string().max(15),
	color: z.nativeEnum(Color)
});

export { schema };
