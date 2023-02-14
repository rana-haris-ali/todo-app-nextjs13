import prisma from './connector';
import { UserInputType } from '@dto'
import bcrypt from 'bcrypt'

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
		const hashedPassword = await bcrypt.hash(userInput.password, parseInt(process.env.SALT_ROUNDS as string));
		const user = await prisma.user.create({ data: { ...userInput, password: hashedPassword } });
		return { user };
	} catch (error) {
		throw error;
	}
}