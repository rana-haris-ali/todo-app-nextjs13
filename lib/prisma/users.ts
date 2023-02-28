import prisma from './connector';
import { UserInputType, UserLoginType } from '@dto'
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
		const { password, ...user } = await prisma.user.create({ data: { ...userInput, password: hashedPassword } });
		return { user };
	} catch (error) {
		throw error;
	}
}
export async function userLogin(loginInput: UserLoginType) {
	try {
		const user = await prisma.user.findUnique({ where: { email: loginInput.email } });

		if (!user) {
			throw new Error('User not registered', { cause: 'validation' })
		}

		const isPasswordCorrect = await bcrypt.compare(loginInput.password, user.password);

		if (!isPasswordCorrect) {
			throw new Error('Incorrect password', { cause: 'validation' });
		}

		return { userId: user.id, username: user.name };
	} catch (error) {
		throw error;
	}
}