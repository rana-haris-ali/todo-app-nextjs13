import prisma from './connector';
import { UserInputType } from '@dto'

export async function getUsers() {
	try {
		const users = await prisma.user.findMany()
		return { users };
	} catch (error) {
		throw error;
	}
}
export async function createUser(userInput: UserInputType) {
	try {
		const user = await prisma.user.create({ data: userInput })
		return { user };
	} catch (error) {
		throw error;
	}
}