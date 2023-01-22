import { CreateTodoType } from '../dto/todos/create.todo.dto';
import prisma from './connector';

export async function getTodos(authorId: number) {
	try {
		const todos = await prisma.todo.findMany({
			where: {
				authorId
			}
		})
		return { todos };
	} catch (error) {
		throw error;
	}
}
export async function createTodo(createTodoInput: CreateTodoType) {
	try {
		const todo = await prisma.todo.create({ data: createTodoInput });
		return { todo };
	} catch (error) {
		throw error;
	}
}