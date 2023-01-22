import { z } from 'zod';

export const CreateTodoSchema = z.object({
	title: z.string(),
	authorId: z.number()
});

export type CreateTodoType = z.infer<typeof CreateTodoSchema>;