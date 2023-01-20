import prisma from './connector';
import { CreateUser } from '@interfaces'

export async function getUsers() {
	try {
		const users = await prisma.user.findMany()
		return { users };
	} catch (error) {
		return { error }
	}
}
export async function createUser(userInput: CreateUser) {
	try {
		const user = await prisma.user.create({ data: userInput })
		return { user };
	} catch (error) {
		return { error }
	}
}