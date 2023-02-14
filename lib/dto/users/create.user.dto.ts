import { z } from 'zod';

export const UserInputSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string().min(8),
});

export type UserInputType = z.infer<typeof UserInputSchema>;