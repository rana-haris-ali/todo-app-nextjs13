import { z } from 'zod';

export const UserInputSchema = z.object({
	name: z.string(),
	email: z.string().email()
});

export type UserInputType = z.infer<typeof UserInputSchema>;