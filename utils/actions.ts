'use server'
import { revalidatePath } from 'next/cache';
import db from './db'

export const newTodo = async (formData: FormData) => {
	const todo = await db.todo.create({
		data: {
			content: formData.get('content') as string
		}
	})

	revalidatePath('/todos');
}