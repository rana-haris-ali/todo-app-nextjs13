import { userLogin } from '@/lib/prisma/users';
import { UserLoginSchema } from '@dto';
import { StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import { ZodError } from "zod";
import jwt from 'jsonwebtoken'



export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		switch (req.method) {
			case 'POST':
				const loginInput = UserLoginSchema.parse(req.body);
				const { userId, username } = await userLogin(loginInput);
				return res.status(StatusCodes.OK).json({
					token: jwt.sign({ userId }, process.env.JWT_SECRET as string, { expiresIn: "2 days" }),
					userId,
					username
				});

			default:
				return res.status(StatusCodes.METHOD_NOT_ALLOWED);
		}
	} catch (err) {
		if (err instanceof ZodError) {
			return res.status(StatusCodes.BAD_REQUEST).json({ err });
		}
		if (err.code === 'P2002') {
			return res.status(StatusCodes.BAD_REQUEST).json({ err: 'Email must be unique' });
		}

		if (err.cause === 'validation') {
			return res.status(StatusCodes.BAD_REQUEST).json({ err: err.message });
		}
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
	}
};