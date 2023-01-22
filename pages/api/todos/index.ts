// import { getTodos } from '@/lib/prisma/todos'
// import { NextApiRequest, NextApiResponse } from 'next';
// import { StatusCodes } from 'http-status-codes';
// import { ZodError } from "zod";
// import { GetTodosSchema } from '@dto'



// export default async (req: NextApiRequest, res: NextApiResponse) => {
// 	try {
// 		switch (req.method) {
// 			case 'GET':
// 				const { todos } = await getTodos(authorId);
// 				return res.status(StatusCodes.OK).json({ data: todos });

// 			default:
// 				return res.status(StatusCodes.METHOD_NOT_ALLOWED);
// 		}
// 	} catch (err) {
// 		if (err instanceof ZodError) {
// 			return res.status(StatusCodes.BAD_REQUEST).json({ err });
// 		}
// 		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
// 	}
// };