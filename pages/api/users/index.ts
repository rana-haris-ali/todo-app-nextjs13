import { getUsers, createUser } from '@/lib/prisma/users'
import { NextApiRequest, NextApiResponse } from 'next';
import { StatusCodes } from 'http-status-codes';
import { ZodError } from "zod";
import { UserInputSchema } from '@dto'



export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		switch (req.method) {
			case 'GET':
				const { users } = await getUsers();
				return res.status(StatusCodes.OK).json({ data: users });

			case 'POST':
				const userInput = UserInputSchema.parse(req.body);
				const { user } = await createUser(userInput);
				return res.status(StatusCodes.CREATED).json({ message: user })

			default:
				return res.status(StatusCodes.METHOD_NOT_ALLOWED);
		}
	} catch (err) {
		if (err instanceof ZodError) {
			return res.status(StatusCodes.BAD_REQUEST).json({ err });
		}
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
	}
};