import { getUsers, createUser } from '@/lib/prisma/users'
import { NextApiRequest, NextApiResponse } from 'next';
import { StatusCodes } from 'http-status-codes';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (req.method === 'GET') {
			const { users, error } = await getUsers();
			if (error) throw error;
			res.status(StatusCodes.OK).json({ data: users });
		}
		else if (req.method === 'POST') {
			const { user, error } = await createUser(req.body);
			if (error) throw error;
			res.status(StatusCodes.CREATED).json({ message: user })
		}
	} catch (err) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
	}
};