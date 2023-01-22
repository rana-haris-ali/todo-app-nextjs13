import { CreateTodoSchema } from '@/lib/dto/todos/create.todo.dto';
import { getTodos, createTodo } from '@/lib/prisma/todos';
import { StatusCodes } from 'http-status-codes';
import { NextApiRequest, NextApiResponse } from 'next';
import { ZodError } from "zod";



export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { userId } = req.query;
		switch (req.method) {
			case 'GET':
				const { todos } = await getTodos(parseInt(userId as string));
				return res.status(StatusCodes.OK).json({ data: todos });

			case 'POST':
				const userInput = CreateTodoSchema.parse(JSON.parse(req.body));
				const { todo } = await createTodo(userInput);
				return res.status(StatusCodes.OK).json({ data: todo });

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