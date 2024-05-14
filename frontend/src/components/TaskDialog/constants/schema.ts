import { z } from 'zod';

const schema = z.object({
	title: z.string().min(10, { message: 'Mínimo de 10 caracteres.' }).max(50),
	description: z
		.string()
		.min(10, { message: 'Mínimo de 10 caracteres.' })
		.max(200)
		.optional(),
	duration: z.string().length(6, { message: 'Duração inválida.' })
});

export { schema };
